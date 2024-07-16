
                    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                    const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
                    let currentMonth = new Date().getMonth();
                    let currentYear = new Date().getFullYear();
                    let currentView = 'month'; // Visualização padrão

                    function generateCalendar(month, year) {
                        const calendarBody = document.getElementById("calendar-body");
                        calendarBody.innerHTML = "";
                        calendarBody.classList.remove('week-view', 'day-view');
                        calendarBody.classList.add('month-view');

                        const firstDay = (new Date(year, month)).getDay();
                        const daysInMonth = 32 - new Date(year, month, 32).getDate();

                        document.getElementById("month-year").textContent = `${monthNames[month]} ${year}`;

                        for (let i = 0; i < dayNames.length; i++) {
                            const dayNameCell = document.createElement("div");
                            dayNameCell.textContent = dayNames[i];
                            calendarBody.appendChild(dayNameCell);
                        }

                        for (let i = 0; i < firstDay; i++) {
                            const emptyCell = document.createElement("div");
                            calendarBody.appendChild(emptyCell);
                        }

                        for (let i = 1; i <= daysInMonth; i++) {
                            const dayCell = document.createElement("div");
                            dayCell.textContent = i;

                            // Adiciona classe para o dia atual
                            if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                                dayCell.classList.add('current-day');
                            }

                            calendarBody.appendChild(dayCell);
                        }
                    }

                    function generateWeekCalendar(month, year) {
                        const calendarBody = document.getElementById("calendar-body");
                        calendarBody.innerHTML = "";
                        calendarBody.classList.remove('month-view', 'day-view');
                        calendarBody.classList.add('week-view');

                        const firstDayOfMonth = new Date(year, month, 1);
                        const currentDate = new Date();
                        const currentWeekDay = currentDate.getDay();
                        const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentWeekDay));

                        document.getElementById("month-year").textContent = `Semana de ${startOfWeek.getDate()} ${monthNames[month]} ${year}`;

                        for (let i = 0; i < 7; i++) {
                            const dayCell = document.createElement("div");
                            dayCell.textContent = `${dayNames[i]} ${startOfWeek.getDate() + i}`;
                            calendarBody.appendChild(dayCell);
                        }
                    }

                    function generateDayCalendar() {
                        const calendarBody = document.getElementById("calendar-body");
                        calendarBody.innerHTML = "";
                        calendarBody.classList.remove('month-view', 'week-view');
                        calendarBody.classList.add('day-view');

                        const currentDate = new Date();
                        document.getElementById("month-year").textContent = `Dia ${currentDate.getDate()} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

                        for (let i = 0; i < 24; i++) {
                            const timeSlot = document.createElement("div");
                            timeSlot.textContent = `${i}:00`;
                            calendarBody.appendChild(timeSlot);
                        }
                    }

                    function previousMonth() {
                        if (currentMonth === 0) {
                            currentMonth = 11;
                            currentYear--;
                        } else {
                            currentMonth--;
                        }
                        generateCalendar(currentMonth, currentYear);
                    }

                    function nextMonth() {
                        if (currentMonth === 11) {
                            currentMonth = 0;
                            currentYear++;
                        } else {
                            currentMonth++;
                        }
                        generateCalendar(currentMonth, currentYear);
                    }

                    function showMonthView() {
                        currentView = 'month';
                        generateCalendar(currentMonth, currentYear);
                    }

                    function showWeekView() {
                        currentView = 'week';
                        generateWeekCalendar(currentMonth, currentYear);
                    }

                    function showDayView() {
                        currentView = 'day';
                        generateDayCalendar();
                    }

                    // Inicializa o calendário com a visualização mensal
                    window.onload = () => {
                        generateCalendar(currentMonth, currentYear);
                    };
       