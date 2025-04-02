import { historialPreguntas } from './Historial.js';
const preguntas = [
    {
        pregunta: "¿Sufriste un accidente?",
        subpreguntas: [
            {
                pregunta: "¿En el trabajo?",
                subpreguntas: [
                    {
                        pregunta: "¿Estás de ART?",
                        subpreguntas: [
                            {
                                pregunta: "¿Iniciaron actuaciones en dependencia para encuadrar las lesiones en y por acto del servicio?",
                                subpreguntas: [
                                    {
                                        pregunta: "¿Te notificaron de la resolución?"
                                    },
                                    {
                                        pregunta: "No me notificaron de la resolución"
                                    },
                                    {
                                        pregunta: "Ninguna de estas."
                                    }
                                ]
                            },
                            {
                                pregunta: "¿No te notificaron del inicio de actuaciones?",
                                subpreguntas: [
                                    {
                                        pregunta: "¿Te notificaron de la resolución?"
                                    },
                                    {
                                        pregunta: "No me notificaron de la resolución"
                                    },
                                    {
                                        pregunta: "Ninguna de estas."
                                    }
                                ]
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "¿La ART te rechazó el siniestro o te dio el alta?",
                        subpreguntas: [
                            {
                                pregunta: "Pasaron 2 años desde el alta o rechazo de la ART?"
                            },
                            {
                                pregunta: "No pasaron 2 años desde el alta o rechazo"
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "Ninguna de estas."
                    }
                ]
            },
            {
                pregunta: "¿Mientras ibas o venías del trabajo?",
                subpreguntas: [
                    {
                        pregunta: "¿Estás de ART?",
                        subpreguntas: [
                            {
                                pregunta: "¿Iniciaron actuaciones en dependencia para encuadrar las lesiones en y por acto del servicio?",
                                subpreguntas: [
                                    {
                                        pregunta: "¿Te notificaron de la resolución?"
                                    },
                                    {
                                        pregunta: "No me notificaron de la resolución"
                                    },
                                    {
                                        pregunta: "Ninguna de estas."
                                    }
                                ]
                            },
                            {
                                pregunta: "¿No te notificaron del inicio de actuaciones?",
                                subpreguntas: [
                                    {
                                        pregunta: "¿Te notificaron de la resolución?"
                                    },
                                    {
                                        pregunta: "No me notificaron de la resolución"
                                    },
                                    {
                                        pregunta: "Ninguna de estas."
                                    }
                                ]
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "¿La ART te rechazó el siniestro o te dio el alta?",
                        subpreguntas: [
                            {
                                pregunta: "Pasaron 2 años desde el alta o rechazo de la ART?"
                            },
                            {
                                pregunta: "No pasaron 2 años desde el alta o rechazo"
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "Ninguna de estas."
                    }
                ]
            },
            {
                pregunta: "Ninguna de estas."
            }
        ]
    },
    {
        pregunta: "¿Tuviste un enfretamiento y sufriste lesiones?",
        subpreguntas: [
            {
                pregunta: "¿Estás de ART?",
                subpreguntas: [
                    {
                        pregunta: "¿Iniciaron actuaciones en dependencia para encuadrar las lesiones en y por acto del servicio?",
                        subpreguntas: [
                            {
                                pregunta: "Me notificaron de la resolución"
                            },
                            {
                                pregunta: "No me notificaron de la resolución"
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "¿No te notificaron del inicio de actuaciones?",
                        subpreguntas: [
                            {
                                pregunta: "¿Te notificaron de la resolución?"
                            },
                            {
                                pregunta: "No me notificaron de la resolución"
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "Ninguna de estas."
                    }
                ]
            },
            {
                pregunta: "¿La ART te rechazó el siniestro o te dio el alta?",
                subpreguntas: [
                    {
                        pregunta: "Pasaron 2 años desde el alta o rechazo de la ART?"
                    },
                    {
                        pregunta: "No pasaron 2 años desde el alta o rechazo"
                    },
                    {
                        pregunta: "Ninguna de estas."
                    }
                ]
            },
            {
                pregunta: "Ninguna de estas."
            }
        ]
    },
    {
        pregunta: "¿Tenés un SA en Trámite?",
        subpreguntas: [
            {
                pregunta: "En la OTC (Oficina de transparencia)",
                subpreguntas: [
                    {
                        pregunta: "¿Te noficiaron del inicio del SA?"
                    }, {

                        pregunta: "¿Declaraste en el SA?"
                    },
                    {
                        pregunta: "¿Te Notificaron de una sanción?"
                    },
                    {
                        pregunta: "Ninguna de estas."
                    }
                ]
            },
            {
                pregunta: "En Desempeño profesional",
                subpreguntas: [
                    {
                        pregunta: "¿Te noficiaron del inicio del SA?"
                    }, {

                        pregunta: "¿Declaraste en el SA?"
                    },
                    {
                        pregunta: "¿Te Notificaron de una sanción?"
                    },
                    {
                        pregunta: "Ninguna de estas."
                    }
                ]
            },
            {
                pregunta: "Ninguna de estas."
            }
        ]
    },
    {
        pregunta: "¿Te pasaron a disponibilidad o pasiva?",
        subpreguntas: [
            {
                pregunta: "¿Estuviste de ART por este motivo?",
                subpreguntas: [
                    {
                        pregunta: "¿Iniciaron actuaciones en dependencia para encuadrar El evento en y por acto del servicio?",
                        subpreguntas: [
                            {
                                pregunta: "¿Te notificaron de la resolución?"
                            },
                            {
                                pregunta: "No me notificaron de la resolución"
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "No iniciaron actuaciones de encuadre"
                    },
                    {
                        pregunta: "Ninguna de estas."
                    }
                ]
            },
            {
                pregunta: "¿Tenes un sumario por este motivo?",
                subpreguntas: [
                    {
                        pregunta: "En la OTC (Oficina de transparencia)",
                        subpreguntas: [
                            {
                                pregunta: "¿Te noficiaron del inicio del SA?"
                            }, {

                                pregunta: "¿Declaraste en el SA?"
                            },
                            {
                                pregunta: "¿Te Notificaron de una sanción?"
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "En Desempeño profesional",
                        subpreguntas: [
                            {
                                pregunta: "¿Te noficiaron del inicio del SA?"
                            }, {

                                pregunta: "¿Declaraste en el SA?"
                            },
                            {
                                pregunta: "¿Te Notificaron de una sanción?"
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "Ninguna de estas."
                    }
                ]
            },
            {
                pregunta: "¿Te aplicaron el protocolo de violencia de genero?",
                subpreguntas: [
                    {
                        pregunta: "Te notificaron del inicio de SA por este motivo?",
                        subpreguntas: [
                            {
                                pregunta: "En la OTC (Oficina de transparencia)",
                                subpreguntas: [
                                    {
                                        pregunta: "¿Te noficiaron del inicio del SA?"
                                    }, {

                                        pregunta: "¿Declaraste en el SA?"
                                    },
                                    {
                                        pregunta: "¿Te Notificaron de una sanción?"
                                    },
                                    {
                                        pregunta: "Ninguna de estas."
                                    }
                                ]
                            },
                            {
                                pregunta: "En Desempeño profesional",
                                subpreguntas: [
                                    {
                                        pregunta: "¿Te noficiaron del inicio del SA?"
                                    }, {

                                        pregunta: "¿Declaraste en el SA?"
                                    },
                                    {
                                        pregunta: "¿Te Notificaron de una sanción?"
                                    },
                                    {
                                        pregunta: "Ninguna de estas."
                                    }
                                ]
                            },
                            {
                                pregunta: "Ninguna de estas."
                            }
                        ]
                    },
                    {
                        pregunta: "No te notificaron del inicio de SA por este motivo"
                    },
                    {
                        pregunta: "Ninguna de estas."
                    }
                ]
            },
            {
                pregunta: "Ninguna de estas."
                
            }
        ]
    },
    {
        pregunta: "¿Te notificaron de una resolución?",
        subpreguntas: [
            {
                pregunta: "Pasaron más de 15 días habiles"
            },
            {
                pregunta: "No pasaron más de 15 días habiles"
            },
            {
                pregunta: "Ninguna de estas."
            }
        ]
    },
    {
        pregunta: "Otro caso",
        subpreguntas: [
            {
                pregunta: "Ningun de estas es la correcta a mi caso."
            }
        ]
    }
];
document.addEventListener('DOMContentLoaded', () => {
    const chatbotImage = document.getElementById("chatbotImage");
    if (chatbotImage) {
        chatbotImage.onclick = function () {
            modal.style.right = "90px";
            modal.style.display = "block";
            switchToRobotImage();
        };
    }

    const chatbotContac = document.getElementById("chatcontac");
    if (chatbotContac) {
        chatbotContac.onclick = function () {
            modal.style.right = "90px";
            modal.style.display = "block";
            switchToRobotImage();
        };
    }
    const contactoDropdown = document.getElementById("contactoDropdown");
    if (contactoDropdown) {
        contactoDropdown.onclick = function () {
            modal.style.right = "90px";
            modal.style.display = "block";
            switchToRobotImage();
        };
    }
});
function guardarHistorialEnLocalStorage() {
    localStorage.setItem('historialPreguntas', JSON.stringify(historialPreguntas));
}

function cargarHistorialDesdeLocalStorage() {
    const datosGuardados = localStorage.getItem('historialPreguntas');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
}


function mostrarSubpreguntas(pregunta, index) {
    historialPreguntas.push({ pregunta, index });
    guardarHistorialEnLocalStorage();
    renderizarSubpreguntas(pregunta, index);
}

function mostrarRespuestas(subpregunta, index, subindex) {
    historialPreguntas.push({ pregunta: subpregunta, index, subindex });
    guardarHistorialEnLocalStorage();
    renderizarRespuestas(subpregunta, index, subindex);
}

function renderizarSubpreguntas(pregunta, index) {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.innerHTML = '';
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = pregunta.pregunta;
    chatbotContainer.appendChild(userMessageDiv);
    pregunta.subpreguntas.forEach((subpregunta, subindex) => {
        const subpreguntaDiv = document.createElement('div');
        subpreguntaDiv.classList.add('message', 'bot-message', 'subpregunta');
        subpreguntaDiv.textContent = subpregunta.pregunta;
        subpreguntaDiv.onclick = () => mostrarRespuestas(subpregunta, index, subindex);
        chatbotContainer.appendChild(subpreguntaDiv);
    });

    agregarBotonVolver();
}
function renderizarRespuestas(subpregunta, index, subindex) {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.innerHTML = '';
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = subpregunta.pregunta;
    chatbotContainer.appendChild(userMessageDiv);

    if (subpregunta.subpreguntas && subpregunta.subpreguntas.length > 0) {
        subpregunta.subpreguntas.forEach((respuesta) => {
            const respuestaDiv = document.createElement('div');
            respuestaDiv.classList.add('message', 'bot-message', 'respuesta');
            respuestaDiv.textContent = respuesta.pregunta;
            respuestaDiv.onclick = () => mostrarRespuestas(respuesta, index, subindex);
            chatbotContainer.appendChild(respuestaDiv);
        });
    } else {
        const noRespuestaDiv = document.createElement('div');
        noRespuestaDiv.classList.add('message', 'bot-message', 'respuesta');
        const recorrido = generarTextoRecorrido();  
        const mensajeInicial = "Hola, este es mi caso: ";
        noRespuestaDiv.innerHTML = `<br><a href="https://api.whatsapp.com/send/?phone=5491158093376&text=${encodeURIComponent(mensajeInicial + recorrido)}&type=phone_number&app_absent=0" target="_blank" class="form-a">Enviar whatsapp</a>`;
        chatbotContainer.appendChild(noRespuestaDiv);
    }

    agregarBotonVolver();
}
function generarTextoRecorrido() {
    return historialPreguntas.map(item => item.pregunta.pregunta).join(' -> ');
}

function agregarBotonVolver() {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (historialPreguntas.length > 0) {
        const backButton = document.createElement('div');
        backButton.classList.add('message', 'bot-message', 'option');
        backButton.textContent = "Volver atrás";
        backButton.onclick = volverAtras;
        chatbotContainer.appendChild(backButton);
    }
}

function volverAtras() {
    historialPreguntas.pop();
    const ultimaPregunta = historialPreguntas[historialPreguntas.length - 1];

    if (ultimaPregunta) {
        if (ultimaPregunta.subindex !== undefined) {
            renderizarRespuestas(ultimaPregunta.pregunta, ultimaPregunta.index, ultimaPregunta.subindex);
        } else {
            renderizarSubpreguntas(ultimaPregunta.pregunta, ultimaPregunta.index);
        }
    } else {
        generarPreguntasIniciales();
    }
}

function generarPreguntasIniciales() {
    let historialTemporal = [];
    historialTemporal = [...historialPreguntas];
    historialPreguntas.length = 0;
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.innerHTML = '';

    preguntas.forEach((pregunta, index) => {
        const preguntaDiv = document.createElement('div');
        preguntaDiv.classList.add('message', 'bot-message', 'pregunta');
        preguntaDiv.textContent = pregunta.pregunta;
        preguntaDiv.onclick = () => mostrarSubpreguntas(pregunta, index);

        chatbotContainer.appendChild(preguntaDiv);
    });
}

generarPreguntasIniciales();

const modal = document.getElementById("chatbotModal");
const btn = document.getElementById("openChatbot");
const span = document.getElementById("closeChatbot");
const robotImage = document.getElementById("robotImage");

function switchToRobotImage() {
    robotImage.style.display = "block";
}

btn.onclick = function () {
    modal.style.right = "90px";
    modal.style.display = "block";
    switchToRobotImage();
}

span.onclick = function () {
    modal.style.right = "-320px";
    setTimeout(() => {
        generarPreguntasIniciales();
        modal.style.display = "none";
        switchToRobotImage();
    }, 300);
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.right = "-320px";
        setTimeout(() => {
            modal.style.display = "none";
            switchToRobotImage();
        }, 300);
    }
}

setTimeout(() => {
    switchToRobotImage();
}, 4000);