"use strict";

const bar = document.querySelector(".bar");
const list = document.querySelector(".list");
const bar2026_btn = document.getElementById("btn2026");
const bar2026_sublist = document.querySelector(".sublist");
const subbtn_redLight = document.getElementById("LuzRoja");
const subbtn_chatGPT = document.getElementById("ChatGPT");
const subbtn_mbl_redLight = document.getElementById("mbl-LuzRoja");
const subbtn_mbl_chatGPT = document.getElementById("mbl-ChatGPT");
const postText = document.querySelector(".text");
const sideBar = document.querySelector(".mbl-side-bar");
const sideBarBtn = document.querySelector(".button");
const plusSign = document.getElementById("plus");
const minusSign = document.getElementById("minus");
const footer = document.querySelector(".footer");

const latestPost = `<h4>
                <u>Luz roja y sueño infantil:</u> por qué puede ayudar en los
                despertares nocturnos
              </h4>
              <h5>1. La luz también influye en el sueño infantil</h5>
              <p>
                El sueño infantil no depende solo del cansancio, las rutinas o
                la alimentación. También está profundamente influido por el
                <b>entorno sensorial que rodea al bebé.</b>
              </p>
              <p>
                Entre todos los estímulos que pueden afectar al descanso,
                <b>la luz ocupa un papel clave</b>. Nuestro cerebro utiliza la
                exposición a la luz como una de las señales principales para
                regular el <u>ritmo circadiano</u>: el ciclo biológico que
                organiza los periodos de sueño y vigilia a lo largo del día.
              </p>
              <p>
                Las luces blancas o azuladas, presentes en muchas lámparas y
                pantallas, emiten longitudes de onda que
                <b>pueden inhibir la producción de melatonina</b>, la hormona
                que facilita el inicio y mantenimiento del sueño. Por eso,
                cuando se utilizan durante la noche, pueden activar el cerebro
                más de lo que imaginamos y dificultar volver a dormir.
              </p>
              <p>
                La luz roja funciona de forma diferente. Su longitud de onda
                <b>interfiere mucho menos con la melatonina</b>, lo que permite
                iluminar el entorno sin alterar tanto el estado fisiológico de
                descanso.
              </p>
              <p>
                Esto no significa que la luz roja induzca el sueño ni que
                sustituya unos buenos hábitos de descanso. Sin embargo, puede
                ser una herramienta útil en momentos muy concretos de la noche:
                <b
                  >despertares nocturnos, tomas, cambios de pañal o la
                  preparación tranquila del ambiente antes de dormir.</b
                >
              </p>
              <h5>2. ¿A qué edad puede usarse la luz roja en bebés y niños?</h5>
              <p>
                El uso de luz roja tenue durante la noche puede resultar útil en
                distintas etapas del desarrollo, aunque
                <b>el motivo de uso suele variar con la edad.</b>
              </p>
              <p><b>Bebés (0-12 meses)</b></p>
              <p>
                Es la etapa en la que más se utiliza. Los recién nacidos y
                lactantes presentan un
                <b>ritmo sueño-vigilia todavía inmaduro</b>, con despertares
                frecuentes para alimentarse o ser atendidos.
              </p>
              <p>
                En estos momentos, una luz roja tenue puede facilitar tareas
                como:
              </p>

              <ul>
                <li>🌸 Cambios de pañal</li>
                <li>🌸 Tomas nocturnas</li>
                <li>🌸 Observar al bebé</li>
              </ul>

              <p>
                sin generar una estimulación lumínica intensa que active
                demasiado el cerebro.
              </p>
              <p><b>Peques de 1 a 5 años</b></p>
              <p>
                En esta etapa el sueño suele estar más organizado, pero siguen
                siendo frecuentes los
                <b
                  >despertares nocturnos o las dificultades para volver a
                  dormir.</b
                >
              </p>
              <p>Una luz roja suave puede ayudar a:</p>
              <ul>
                <li>🌸 Crear un ambiente más calmado antes de dormir</li>
                <li>🌸 Acompañar despertares nocturnos sin sobreestimular</li>
                <li>🌸 Facilitar la transición de vuelta al sueño</li>
              </ul>
              <p><b>Niños mayores de 5 años</b></p>
              <p>
                En niños más mayores sigue siendo
                <b>menos disruptiva que la luz blanca o azul</b>, especialmente
                si se utiliza como luz ambiental tenue durante el momento previo
                al descanso.
              </p>
              <p>
                Aun así, es importante recordar que
                <b>la luz roja no induce el sueño por sí sola</b>. Su función es
                simplemente mantener un entorno menos estimulante para el
                cerebro.
              </p>
              <h5>
                3. Cómo usar la luz roja por la noche sin alterar el sueño
              </h5>
              <p>
                Para que la luz roja sea realmente respetuosa con el descanso,
                es importante tener en cuenta algunos aspectos prácticos.
              </p>
              <p>
                <b>Mantener una intensidad baja La luz debe ser tenue</b><br />
                Una iluminación muy intensa, incluso si es roja, puede resultar
                estimulante.
              </p>
              <p>
                <b>Evitar la luz directa en los ojos</b><br />
                Lo ideal es utilizar una luz ambiental o indirecta, por ejemplo
                una pequeña lámpara de baja intensidad.
              </p>
              <p>
                <b>Usarla solo cuando sea necesario</b><br />
                Puede utilizarse durante despertares nocturnos o en el momento
                previo al sueño, pero no como una luz permanente durante toda la
                noche.
              </p>
              <p>
                <b>No sustituye las rutinas de sueño</b><br />
                El descanso infantil depende sobre todo de hábitos consistentes:
                horarios regulares, rituales de sueño y un entorno tranquilo.
              </p>
              <p><i>Un pequeño aliado en la noche</i></p>
              <p>
                🌸 La luz roja no duerme.<br />🌸 No seda.<br />🌸 Y no
                garantiza un sueño profundo.
              </p>
              <p>
                Pero puede convertirse en un pequeño aliado durante la noche,
                porque
                <u
                  >permite atender y acompañar sin romper del todo el estado de
                  calma del cerebro.</u
                >
              </p>
              <p>
                A veces, en el descanso infantil, los detalles más pequeños
                también cuentan.
              </p>`;

// SIDE BAR

sideBarBtn.addEventListener("click", () => {
  sideBarBtn.classList.toggle("adjust-btn");
  sideBar.classList.toggle("slide");
  plusSign.classList.toggle("hidden");
  minusSign.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!sideBar.contains(e.target) && !sideBarBtn.contains(e.target)) {
    sideBarBtn.classList.toggle("adjust-btn");
    sideBar.classList.toggle("slide");
    plusSign.classList.toggle("hidden");
    minusSign.classList.toggle("hidden");
  }
});

const showSideBar = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sideBar.classList.add("show-bar");
    } else {
      sideBar.classList.remove("show-bar");
    }
  });
};

const sideBarObserver = new IntersectionObserver(showSideBar, {
  root: null,
  threshold: 0.05,
});

sideBarObserver.observe(postText);

// ENVIAR EL POST

// Al cargar la Página

document.addEventListener("DOMContentLoaded", () => {
  postText.insertAdjacentHTML("afterbegin", latestPost);
  document
    .querySelector(".header")
    .style.setProperty("--before-content", "'Publicado el 5 de Marzo'");
  document
    .querySelector(".header")
    .style.setProperty("--img-position", "center 70%");
  document
    .querySelector(".header")
    .style.setProperty("--image", "url(../public/images/Luz_roja.jpg)");
});

// Al seleccionar un Post determinado

[subbtn_redLight, subbtn_mbl_redLight].forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".header")
      .style.setProperty("--image", "url(../public/images/Luz_roja.jpg)");
    document
      .querySelector(".header")
      .style.setProperty("--before-content", "'Publicado el 5 de Marzo'");
    document
      .querySelector(".header")
      .style.setProperty("--img-position", "center 70%");
    postText.innerHTML = latestPost;
  });
});

[subbtn_chatGPT, subbtn_mbl_chatGPT].forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".header")
      .style.setProperty("--image", "url(../public/images/chatGPT.png)");
    document
      .querySelector(".header")
      .style.setProperty("--img-position", "center 30%");
    document
      .querySelector(".header")
      .style.setProperty("--before-content", "'Publicado el 10 de Marzo'");
    postText.innerHTML = `<h4>
                      ¿Puede ChatGPT ayudar en fisioterapia pediátrica? Lo que dice la
                      evidencia científica
                    </h4>
                    <p>
                      En los últimos meses, muchas familias me han preguntado si
                      pueden utilizar herramientas como ChatGPT para orientar la
                      fisioterapia de sus hijos. Más allá de opiniones personales,
                      recientemente se ha publicado un artículo científico que analiza
                      específicamente el papel de ChatGPT en el ámbito de la
                      fisioterapia pediátrica, explorando sus posibles beneficios,
                      limitaciones clínicas y riesgos éticos.
                    </p>
                    <p>
                      A partir de ese análisis, podemos entender mejor qué puede
                      aportar realmente esta tecnología… y qué no.
                    </p>
                    <h5>1. Qué es ChatGPT desde el punto de vista clínico</h5>
                    <p>
                      El artículo explica que <b>ChatGPT es un modelo de lenguaje</b>
                      entrenado para procesar grandes volúmenes de texto y generar
                      respuestas coherentes.
                    </p>
                    <p>Sin embargo:</p>
                    <ul>
                      <li>
                        🌸 No realiza razonamiento clínico ni evaluación directa del
                        paciente.
                      </li>
                      <li>
                        🌸 No puede observar al niño, valorar su tono muscular ni
                        analizar su patrón de movimiento.
                      </li>
                      <li>
                        🌸 Por definición, es una herramienta de generación de texto,
                        no un sustituto de la valoración profesional.
                      </li>
                    </ul>
                    <h5>2. Beneficios y limitaciones según la evidencia</h5>
                    <p><b>Beneficios</b></p>
                    <p>
                      El estudio señala que ChatGPT puede ser útil como herramienta
                      informativa y educativa:
                    </p>
                    <ul>
                      <li>🌸 Elaborar materiales educativos para familias.</li>
                      <li>
                        🌸 Explicar conceptos básicos (por ejemplo, qué es el tummy
                        time).
                      </li>
                      <li>
                        🌸 Organizar información sobre determinadas condiciones.
                      </li>
                      <li>🌸 Ayudar a estructurar ideas generales de tratamiento.</li>
                    </ul>
                    <p>
                      En resumen: puede
                      <u
                        >apoyar la comprensión y organización de información, pero no
                        sustituye la evaluación profesional.</u
                      >
                    </p>
                    <p><b>Limitaciones</b></p>
                    <p>El estudio advierte de restricciones importantes:</p>
                    <ul>
                      <li>🌸 No puede realizar valoración individual del niño.</li>
                      <li>
                        🌸 No detecta compensaciones motoras ni señales emocionales.
                      </li>
                      <li>🌸 No ajusta tratamientos en tiempo real.</li>
                      <li>
                        🌸 Puede generar información incorrecta con apariencia
                        convincente (fenómeno conocido como “hallucinations”).
                      </li>
                    </ul>
                    <p>
                      En fisioterapia pediátrica, estos puntos son especialmente
                      relevantes, ya que
                      <u>la interpretación directa del paciente es clave.</u>
                    </p>
                    <h5>3. Aspectos éticos a considerar</h5>
                    <p>El análisis también destaca riesgos relacionados con:</p>
                    <ul>
                      <li>
                        🌸 Privacidad: nunca introducir datos identificables de
                        menores en plataformas abiertas.
                      </li>
                      <li>
                        🌸 Sesgos: los modelos están entrenados principalmente con
                        datos de determinados contextos culturales y sanitarios.
                      </li>
                      <li>
                        🌸 Responsabilidad: las decisiones clínicas siempre deben
                        recaer en el profesional, no en la inteligencia artificial.
                      </li>
                    </ul>
                    <p><b>Reflexión final Keiki</b></p>
                    <p>
                      ChatGPT puede ser un apoyo informativo, útil para explicar
                      conceptos u organizar ideas, pero no sustituye la mirada
                      profesional ni la valoración directa del niño.
                    </p>
                    <p>
                      Como en cualquier herramienta tecnológica, la clave está en
                      comprender sus límites y usarla con criterio.
                    </p>
                    <p>
                      Fuente: Ziab H M, Mazbouh R, Siblini F, et al. (September 03,
                      2025)
                      <i
                        >Transforming Pediatric Physiotherapy: The Role of ChatGPT in
                        Therapy, Limitations, and Ethical Considerations.</i
                      >
                      Cureus 17(9): e91571. doi:
                      <a
                        href="https://www.cureus.com/articles/405661-transforming-pediatric-physiotherapy-the-role-of-chatgpt-in-therapy-limitations-and-ethical-considerations#!/"
                        ><u>10.7759/cureus.91571</u></a
                      >
                    </p>`;
  });
});

[subbtn_mbl_chatGPT, subbtn_mbl_redLight].forEach((e) => {
  e.addEventListener("click", () => {
    sideBar.classList.remove("slide");
    minusSign.classList.toggle("hidden");
    plusSign.classList.toggle("hidden");
    sideBarBtn.classList.toggle("adjust-btn");
  });
});

// STICKY BAR

const sentinel = document.querySelector(".bar-sentinel");

const stickyNav = (entries) => {
  entries.forEach((entry) => {
    if (entry.boundingClientRect.top <= 0) {
      console.log(entry);
      list.classList.add("sticky");
    } else {
      list.classList.remove("sticky");
    }
  });
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 1,
});

observer.observe(bar);
