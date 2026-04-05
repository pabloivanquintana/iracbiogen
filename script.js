document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobile-nav');
    const header = document.getElementById('main-header');
    const consultaForm = document.getElementById('consultaForm');
    const programaSelect = document.getElementById('cf-programa');
    const waBtnInversion = document.getElementById('waBtnInversion');
    const filterCheckboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
    const programCards = document.querySelectorAll('#programsGrid .program-list-card');
    const programsCount = document.getElementById('programsCount');
    const noResults = document.getElementById('noResults');
    const resetBtns = document.querySelectorAll('#resetFilters, #resetFilters2');
    const filtersChips = document.getElementById('filtersChips');
    const filtersActiveCount = document.getElementById('filtersActiveCount');
    const filtersMobileToggle = document.getElementById('filtersMobileToggle');
    const filtersContent = document.getElementById('filtersContent');
    const mobileSubmenuToggles = document.querySelectorAll('.mobile-submenu-toggle');
    const desktopDropdowns = document.querySelectorAll('.nav-item--dropdown');
    const programsContextBadge = document.getElementById('programsContextBadge');
    const urlParams = new URLSearchParams(window.location.search);
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    let activeNavCategory = normalizeNavCategory(urlParams.get('type'));

    const chipLabels = {
        maestria: 'Maestría / Especialización',
        curso: 'Curso Intensivo',
        pasantia: 'Pasantía',
        presencial: 'Presencial',
        online: 'Online',
        hibrido: 'Híbrido',
        corta: 'Duración corta',
        media: 'Duración media',
        larga: 'Duración larga',
    };

    // Se asigna dentro del bloque, pero declarado aquí para que renderFilterChips pueda llamarla
    let filterPrograms = () => {};

    const waBaseURL = 'https://wa.me/5493517592643?text=';
    const programaLabels = {
        'maestria-biotecnologias': 'la Maestria en Biotecnologias Reproductivas en Bovinos',
        'especializacion-repro': 'la Especializacion en Reproduccion Bovina',
        'maestria-carne': 'la Maestria en Produccion de Carne Bovina',
        'pasantia-2026': 'la Pasantia Profesional 2026',
        'cursos-intensivos': 'los Cursos Intensivos',
    };

    const modal = createSiteModal();

    const navCategoryLabels = {
        all: 'Toda la oferta',
        maestria: 'Maestrías',
        especializacion: 'Especializaciones',
        curso: 'Cursos intensivos',
        pasantia: 'Pasantías',
    };

    function normalizeNavCategory(value) {
        const normalized = (value || '').toLowerCase();

        if (['maestria', 'especializacion', 'curso', 'pasantia', 'all'].includes(normalized)) {
            return normalized;
        }

        return null;
    }

    if (menuToggle && mobileNav && header) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('open');
            menuToggle.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        mobileNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                closeMobileNav();
            });
        });

        document.addEventListener('click', (event) => {
            if (!header.contains(event.target) && !mobileNav.contains(event.target)) {
                closeMobileNav();
            }
        });
    }

    if (mobileSubmenuToggles.length) {
        mobileSubmenuToggles.forEach((toggle) => {
            toggle.addEventListener('click', () => {
                const group = toggle.closest('.mobile-nav-group');
                if (!group) return;

                const willOpen = !group.classList.contains('open');

                mobileSubmenuToggles.forEach((otherToggle) => {
                    const otherGroup = otherToggle.closest('.mobile-nav-group');
                    if (!otherGroup) return;

                    otherGroup.classList.remove('open');
                    otherToggle.setAttribute('aria-expanded', 'false');
                });

                group.classList.toggle('open', willOpen);
                toggle.setAttribute('aria-expanded', String(willOpen));
            });
        });
    }

    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 40);
        }, { passive: true });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ---- Renderiza chips de filtros activos ----
    function renderFilterChips() {
        if (!filtersChips) return;

        const checked = Array.from(document.querySelectorAll('.filters-sidebar input[type="checkbox"]:checked'));
        const count = checked.length;

        // Badge en mobile toggle
        if (filtersActiveCount) {
            filtersActiveCount.textContent = count;
            filtersActiveCount.style.display = count > 0 ? 'inline-block' : 'none';
        }

        if (count === 0) {
            filtersChips.innerHTML = '';
            return;
        }

        filtersChips.innerHTML = checked.map((cb) => {
            const label = chipLabels[cb.value] || cb.value;
            return `<span class="filter-chip" data-name="${cb.name}" data-value="${cb.value}">
                ${label}
                <button class="filter-chip-remove" aria-label="Quitar filtro ${label}">
                    <i class="fas fa-xmark"></i>
                </button>
            </span>`;
        }).join('');

        filtersChips.querySelectorAll('.filter-chip-remove').forEach((btn) => {
            btn.addEventListener('click', () => {
                const chip = btn.closest('.filter-chip');
                const cb = document.querySelector(`input[name="${chip.dataset.name}"][value="${chip.dataset.value}"]`);
                if (cb) {
                    cb.checked = false;
                    // Al quitar un chip el usuario toma el control — limpiar filtro de URL
                    if (activeNavCategory && activeNavCategory !== 'all') {
                        activeNavCategory = null;
                        window.history.replaceState({}, '', window.location.pathname);
                    }
                    filterPrograms();
                }
            });
        });
    }

    // ---- Lógica de filtrado ----
    if (filterCheckboxes.length) {
        filterPrograms = () => {
            const active = {
                type: Array.from(document.querySelectorAll('input[name="type"]:checked')).map((el) => el.value),
                modality: Array.from(document.querySelectorAll('input[name="modality"]:checked')).map((el) => el.value),
                duration: Array.from(document.querySelectorAll('input[name="duration"]:checked')).map((el) => el.value),
            };

            let visible = 0;

            programCards.forEach((card) => {
                const matchType = active.type.length === 0 || active.type.includes(card.dataset.type);
                const matchModality = active.modality.length === 0 || active.modality.includes(card.dataset.modality);
                const matchDuration = active.duration.length === 0 || active.duration.includes(card.dataset.duration);
                const matchNavCategory = !activeNavCategory
                    || activeNavCategory === 'all'
                    || card.dataset.category === activeNavCategory;
                const show = matchType && matchModality && matchDuration && matchNavCategory;

                card.style.display = show ? '' : 'none';
                if (show) visible += 1;
            });

            if (programsCount) {
                programsCount.textContent = visible === 1
                    ? '1 programa disponible'
                    : `${visible} programas disponibles`;
            }

            if (noResults) {
                noResults.style.display = visible === 0 ? 'block' : 'none';
            }

            renderFilterChips();
            renderProgramsContext();
            updateNavigationState();
        };

        filterCheckboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                // La primera interacción manual del usuario libera el filtro de URL
                if (activeNavCategory && activeNavCategory !== 'all') {
                    activeNavCategory = null;
                    window.history.replaceState({}, '', window.location.pathname);
                }
                filterPrograms();
            });
        });

        resetBtns.forEach((button) => {
            button.addEventListener('click', () => {
                filterCheckboxes.forEach((checkbox) => {
                    checkbox.checked = false;
                });

                activeNavCategory = null;
                window.history.replaceState({}, '', window.location.pathname);
                filterPrograms();
            });
        });

    }

    // ---- Toggle mobile de filtros ----
    if (filtersMobileToggle && filtersContent) {
        filtersMobileToggle.addEventListener('click', () => {
            const isOpen = filtersContent.classList.toggle('is-open');
            filtersMobileToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    activeNavCategory = activeNavCategory || inferCurrentNavCategory();
    applyInitialProgramCategory();
    if (filterCheckboxes.length) {
        filterPrograms();
    }
    updateNavigationState();
    renderProgramsContext();

    if (programaSelect) {
        programaSelect.addEventListener('change', () => {
            updateInlineWhatsApp();
        });
        updateInlineWhatsApp();
    }

    if (consultaForm) {
        setupLeadForm(consultaForm, {
            submitButtonSelector: '#btnEnviar',
            successSelector: '#form-success',
            successMessage: 'Un asesor de admisiones se comunicara con vos a la brevedad.',
            afterSuccess: () => {
                const footer = consultaForm.querySelector('.form-footer');
                if (footer) footer.style.display = 'none';

                consultaForm.querySelectorAll('.form-row, .form-field').forEach((element) => {
                    element.style.opacity = '0.4';
                });
            },
        });
    }

    window.scrollToForm = () => {
        applyInlineFormMode('informacion');
        const form = document.getElementById('formulario-consulta');

        if (!form) return;

        form.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            const firstInput = form.querySelector('input:not([disabled]), select:not([disabled]), textarea:not([disabled])');
            if (firstInput) firstInput.focus({ preventScroll: true });
        }, 500);
    };

    window.openForm = (mode = 'informacion') => {
        if (mode === 'inscripcion') {
            openLeadModal('inscripcion');
            return;
        }

        window.scrollToForm();
    };

    window.setFormMode = (mode = 'informacion') => {
        if (mode === 'inscripcion') {
            openLeadModal('inscripcion');
            return;
        }

        openLeadModal('informacion');
    };

    function closeMobileNav() {
        if (!mobileNav || !menuToggle) return;

        mobileNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileSubmenuToggles.forEach((toggle) => {
            const group = toggle.closest('.mobile-nav-group');
            if (group) group.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
        document.body.style.overflow = '';
    }

    function inferCurrentNavCategory() {
        if (currentPath === 'programa-detalle.html') {
            const title = document.querySelector('.detail-hero h1')?.textContent?.trim().toLowerCase() || '';

            if (title.includes('especializ')) return 'especializacion';
            if (title.includes('pasant')) return 'pasantia';
            if (title.includes('curso') || title.includes('ecograf') || title.includes('ovocit') || title.includes('embrion')) return 'curso';

            return 'maestria';
        }

        if (currentPath === 'programas.html') {
            return null;
        }

        return null;
    }

    function applyInitialProgramCategory() {
        if (!filterCheckboxes.length || !activeNavCategory || activeNavCategory === 'all') return;

        if (activeNavCategory === 'especializacion') {
            return;
        }

        const checkbox = document.querySelector(`input[name="type"][value="${activeNavCategory}"]`);
        if (checkbox) checkbox.checked = true;
    }

    function updateNavigationState() {
        const isFormationSection = currentPath === 'programas.html' || currentPath === 'programa-detalle.html';
        const currentCategory = activeNavCategory || 'all';

        document.querySelectorAll('.main-nav a, .mobile-nav a').forEach((link) => {
            const href = link.getAttribute('href') || '';
            const linkPath = href.split('/').pop().split('?')[0].split('#')[0];
            const navCategory = link.dataset.navCategory || null;

            link.classList.remove('active');

            if (navCategory) {
                const shouldActivate = isFormationSection
                    && (navCategory === currentCategory || (currentCategory === null && navCategory === 'all'));
                link.classList.toggle('active', shouldActivate);
                return;
            }

            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });

        desktopDropdowns.forEach((dropdown) => {
            dropdown.classList.toggle('active-context', isFormationSection);
        });

        document.querySelectorAll('.nav-dropdown-trigger').forEach((trigger) => {
            trigger.classList.toggle('active', isFormationSection);
        });

        mobileSubmenuToggles.forEach((toggle) => {
            const group = toggle.closest('.mobile-nav-group');
            if (!group) return;

            group.classList.toggle('open', isFormationSection);
            toggle.setAttribute('aria-expanded', String(isFormationSection));
        });
    }

    function renderProgramsContext() {
        if (!programsContextBadge) return;

        if (!activeNavCategory || activeNavCategory === 'all') {
            programsContextBadge.hidden = true;
            programsContextBadge.textContent = '';
            return;
        }

        programsContextBadge.hidden = false;
        programsContextBadge.textContent = `Mostrando: ${navCategoryLabels[activeNavCategory] || 'Programas filtrados'}`;
    }

    function getCurrentProgramValue() {
        if (programaSelect && programaSelect.value) return programaSelect.value;

        const title = document.querySelector('.detail-hero h1')?.textContent?.trim().toLowerCase() || '';

        if (title.includes('biotecnolog')) return 'maestria-biotecnologias';
        if (title.includes('especializacion')) return 'especializacion-repro';
        if (title.includes('carne')) return 'maestria-carne';
        if (title.includes('pasant')) return 'pasantia-2026';
        if (title.includes('curso')) return 'cursos-intensivos';

        return 'maestria-biotecnologias';
    }

    function getProgramDisplayName() {
        const currentValue = getCurrentProgramValue();

        if (programaSelect?.selectedOptions?.[0]?.textContent) {
            return programaSelect.selectedOptions[0].textContent.trim();
        }

        const detailTitle = document.querySelector('.detail-hero h1')?.textContent?.trim();
        if (detailTitle) return detailTitle;

        return programaLabels[currentValue] || 'los programas de IRAC BIOGEN';
    }

    function buildWhatsAppUrl(kind = 'informacion') {
        const programText = getProgramDisplayName();
        const baseMessage = kind === 'inscripcion'
            ? `Hola, quiero iniciar la preinscripcion para ${programText}`
            : `Hola, quiero informacion sobre ${programText}`;

        return `${waBaseURL}${encodeURIComponent(baseMessage)}`;
    }

    function updateInlineWhatsApp() {
        if (!waBtnInversion) return;
        waBtnInversion.href = buildWhatsAppUrl('informacion');
    }

    function applyInlineFormMode(mode = 'informacion') {
        const modeField = document.getElementById('cf-modo');
        if (modeField) modeField.value = mode;

        const title = document.getElementById('formTitle');
        const subtitle = document.getElementById('formSubtitle');
        const buttonLabel = document.getElementById('btnEnviarLabel');
        const infoBtn = document.getElementById('modeInfoBtn');
        const inscBtn = document.getElementById('modeInscBtn');

        if (mode === 'inscripcion') {
            if (title) title.textContent = 'Inicia tu preinscripcion';
            if (subtitle) subtitle.textContent = 'Dejanos tus datos y te acompanamos con requisitos, modalidad y proximos pasos.';
            if (buttonLabel) buttonLabel.textContent = 'Enviar preinscripcion';
        } else {
            if (title) title.textContent = 'Recibi informacion completa';
            if (subtitle) subtitle.textContent = 'Completa el formulario y un asesor te contacta en menos de 24 horas.';
            if (buttonLabel) buttonLabel.textContent = 'Quiero recibir informacion';
        }

        if (infoBtn && inscBtn) {
            infoBtn.classList.toggle('mode-btn--active', mode === 'informacion');
            inscBtn.classList.toggle('mode-btn--active', mode === 'inscripcion');
        }
    }

    function createSiteModal() {
        const element = document.createElement('div');
        element.className = 'site-modal';
        element.setAttribute('aria-hidden', 'true');
        element.innerHTML = `
            <div class="site-modal__backdrop" data-modal-close="true"></div>
            <div class="site-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="siteModalTitle">
                <div id="siteModalContent"></div>
            </div>
        `;

        document.body.appendChild(element);

        element.addEventListener('click', (event) => {
            const target = event.target;
            if (target instanceof HTMLElement && target.closest('[data-modal-close="true"]')) {
                closeLeadModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && element.classList.contains('is-open')) {
                closeLeadModal();
            }
        });

        return element;
    }

    function openLeadModal(type) {
        const modalContent = modal.querySelector('#siteModalContent');
        if (!modalContent) return;

        if (type === 'inscripcion') {
            modalContent.innerHTML = buildPreinscripcionModalMarkup();
            setupPreinscripcionModal(modalContent);
        } else {
            modalContent.innerHTML = buildInformacionModalMarkup();
            setupInformacionModal(modalContent);
        }

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeLeadModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    function buildInformacionModalMarkup() {
        return `
            <div class="site-modal__header">
                <span class="site-modal__eyebrow"><i class="fas fa-circle-info"></i> Informacion</span>
                <button type="button" class="site-modal__close" aria-label="Cerrar" data-modal-close="true">
                    <i class="fas fa-xmark"></i>
                </button>
                <h3 id="siteModalTitle">Elegi como queres recibir informacion</h3>
                <p>Escribinos por WhatsApp o completa el formulario. Un asesor de admisiones se comunica a la brevedad para orientarte segun tu perfil y objetivos.</p>
            </div>
            <div class="site-modal__body">
                <div class="lead-choice-grid">
                    <div class="lead-choice-card">
                        <h4>Atencion por WhatsApp</h4>
                        <p>Ideal si queres hacer una consulta rapida y recibir respuesta directa del equipo de admisiones.</p>
                        <a href="${buildWhatsAppUrl('informacion')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" id="modalInfoWhatsAppBtn">
                            <i class="fab fa-whatsapp"></i> Escribir por WhatsApp
                        </a>
                    </div>
                    <div class="lead-choice-card">
                        <h4>Formulario de consulta</h4>
                        <p>Si preferis dejarnos tus datos, te guiamos por mail o telefono segun tu perfil y disponibilidad.</p>
                        <button type="button" class="btn btn-primary" id="modalScrollFormBtn">
                            <i class="fas fa-envelope-open-text"></i> Ir al formulario
                        </button>
                    </div>
                </div>
                <p class="lead-modal-note">Tambien podes usar el formulario si necesitas informacion mas completa sobre modalidad, fechas o admision.</p>
            </div>
        `;
    }

    function buildPreinscripcionModalMarkup() {
        const currentValue = getCurrentProgramValue();

        return `
            <div class="site-modal__header">
                <span class="site-modal__eyebrow"><i class="fas fa-file-signature"></i> Preinscripcion</span>
                <button type="button" class="site-modal__close" aria-label="Cerrar" data-modal-close="true">
                    <i class="fas fa-xmark"></i>
                </button>
                <h3 id="siteModalTitle">Inicia tu preinscripcion</h3>
                <p>Completa tus datos y te acompanamos con requisitos, modalidad y proximos pasos. Sin compromiso.</p>
            </div>
            <div class="site-modal__body lead-modal-form">
                <form id="preinscripcionModalForm" class="consulta-form" novalidate>
                    <input type="hidden" name="modo" value="inscripcion">
                    <div class="form-row">
                        <div class="form-field">
                            <label for="pm-nombre">Nombre completo *</label>
                            <input type="text" id="pm-nombre" name="nombre" placeholder="Tu nombre y apellido" required>
                            <span class="field-error" data-error-for="nombre"></span>
                        </div>
                        <div class="form-field">
                            <label for="pm-email">Email *</label>
                            <input type="email" id="pm-email" name="email" placeholder="tu@email.com" required>
                            <span class="field-error" data-error-for="email"></span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-field">
                            <label for="pm-telefono">Telefono / WhatsApp</label>
                            <input type="tel" id="pm-telefono" name="telefono" placeholder="+54 9 ...">
                        </div>
                        <div class="form-field">
                            <label for="pm-programa">Programa de interes</label>
                            <select id="pm-programa" name="programa">
                                <option value="maestria-biotecnologias"${currentValue === 'maestria-biotecnologias' ? ' selected' : ''}>Maestria en Biotecnologias Reproductivas</option>
                                <option value="especializacion-repro"${currentValue === 'especializacion-repro' ? ' selected' : ''}>Especializacion en Reproduccion Bovina</option>
                                <option value="maestria-carne"${currentValue === 'maestria-carne' ? ' selected' : ''}>Maestria en Produccion de Carne Bovina</option>
                                <option value="pasantia-2026"${currentValue === 'pasantia-2026' ? ' selected' : ''}>Pasantia Profesional 2026</option>
                                <option value="cursos-intensivos"${currentValue === 'cursos-intensivos' ? ' selected' : ''}>Cursos Intensivos</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-field">
                        <label for="pm-mensaje">Mensaje (opcional)</label>
                        <textarea id="pm-mensaje" name="mensaje" rows="3" placeholder="Si queres, contanos tu perfil o desde que pais nos escribis."></textarea>
                    </div>
                    <div class="form-footer">
                        <p class="form-privacy"><i class="fas fa-shield-halved"></i> Tus datos se usan solo para orientarte sobre la preinscripcion.</p>
                        <div style="display:flex; gap: var(--sp-3); flex-wrap: wrap;">
                            <button type="submit" class="btn btn-primary btn-lg" id="modalPreinscripcionSubmit">
                                <i class="fas fa-paper-plane"></i> Enviar preinscripcion
                            </button>
                            <a href="${buildWhatsAppUrl('inscripcion')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
                                <i class="fab fa-whatsapp"></i> WhatsApp
                            </a>
                        </div>
                    </div>
                    <div class="lead-modal-success" id="modalPreinscripcionSuccess">
                        <i class="fas fa-circle-check"></i>
                        <div>
                            <strong>Preinscripcion recibida</strong>
                            <p>Gracias por completar tus datos. Nos comunicaremos a la brevedad para continuar.</p>
                        </div>
                    </div>
                </form>
            </div>
        `;
    }

    function setupInformacionModal(container) {
        const goToFormButton = container.querySelector('#modalScrollFormBtn');

        if (goToFormButton) {
            goToFormButton.addEventListener('click', () => {
                closeLeadModal();
                applyInlineFormMode('informacion');
                window.scrollToForm();
            });
        }
    }

    function setupPreinscripcionModal(container) {
        const form = container.querySelector('#preinscripcionModalForm');
        if (!form) return;

        const select = form.querySelector('select[name="programa"]');
        const whatsappButton = form.querySelector('.btn-whatsapp');

        const updateModalWhatsApp = () => {
            if (!select || !whatsappButton) return;
            const selectedLabel = select.selectedOptions?.[0]?.textContent?.trim() || 'el programa elegido';
            whatsappButton.href = `${waBaseURL}${encodeURIComponent(`Hola, quiero iniciar la preinscripcion para ${selectedLabel}`)}`;
        };

        if (select) {
            select.addEventListener('change', updateModalWhatsApp);
            updateModalWhatsApp();
        }

        setupLeadForm(form, {
            submitButtonSelector: '#modalPreinscripcionSubmit',
            successSelector: '#modalPreinscripcionSuccess',
            successMessage: 'Gracias por tu preinscripcion. Nos comunicaremos a la brevedad.',
            afterSuccess: () => {
                const footer = form.querySelector('.form-footer');
                if (footer) footer.style.display = 'none';

                form.querySelectorAll('.form-row, .form-field').forEach((element) => {
                    element.style.opacity = '0.4';
                });
            },
        });
    }

    function setupLeadForm(form, options) {
        if (form.dataset.bound === 'true') return;
        form.dataset.bound = 'true';

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = form.querySelector('[name="nombre"]');
            const email = form.querySelector('[name="email"]');
            const successBox = options.successSelector ? form.querySelector(options.successSelector) : null;
            const submitButton = options.submitButtonSelector ? form.querySelector(options.submitButtonSelector) : null;
            const nombreError = form.querySelector('#err-nombre, [data-error-for="nombre"]');
            const emailError = form.querySelector('#err-email, [data-error-for="email"]');

            if (!nombre || !email) return;

            let valid = true;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            nombre.classList.remove('error');
            email.classList.remove('error');
            if (nombreError) nombreError.textContent = '';
            if (emailError) emailError.textContent = '';
            if (successBox) successBox.style.display = 'none';
            if (successBox) successBox.classList.remove('is-visible');

            if (!nombre.value.trim()) {
                nombre.classList.add('error');
                if (nombreError) nombreError.textContent = 'Por favor, ingresa tu nombre.';
                valid = false;
            }

            if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
                email.classList.add('error');
                if (emailError) emailError.textContent = 'Ingresa un email valido.';
                valid = false;
            }

            if (!valid) return;

            const originalHtml = submitButton ? submitButton.innerHTML : '';

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            }

            window.setTimeout(() => {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalHtml;
                }

                if (typeof options.afterSuccess === 'function') {
                    options.afterSuccess();
                }

                if (successBox) {
                    const successCopy = successBox.querySelector('p');
                    if (successCopy && options.successMessage) {
                        successCopy.textContent = options.successMessage;
                    }

                    successBox.style.display = successBox.classList.contains('lead-modal-success') ? '' : 'flex';
                    successBox.classList.add('is-visible');
                    successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 900);
        });
    }
});
