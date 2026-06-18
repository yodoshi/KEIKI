"use strict";

const bar = document.querySelector(".bar");
const list = document.querySelector(".list");
const bar2026_btn = document.getElementById("btn2026");
const bar2026_sublist = document.querySelector(".sublist");
const subbtn_redLight = document.getElementById("LuzRoja");
const subbtn_chatGPT = document.getElementById("ChatGPT");
const subbtn_tTime = document.getElementById("tummyTime");
const subbtn_plasticidad = document.getElementById("plasticidad");
const subbtn_llanto = document.getElementById("llanto");
const subbtn_cojas = document.getElementById("cojas");
const subbtn_mbl_redLight = document.getElementById("mbl-LuzRoja");
const subbtn_mbl_chatGPT = document.getElementById("mbl-ChatGPT");
const subbtn_mbl_tTime = document.getElementById("mbl-tummyTime");
const subbtn_mbl_plasticidad = document.getElementById("mbl-plasticidad");
const subbtn_mbl_llanto = document.getElementById("mbl-llanto");
const subbtn_mbl_cojas = document.getElementById("mbl-cojas");
const postText = document.querySelector(".text");
const sideBar = document.querySelector(".mbl-side-bar");
const sideBarBtn = document.querySelector(".button");
const plusSign = document.getElementById("plus");
const minusSign = document.getElementById("minus");
const footer = document.querySelector(".footer");

const latestPost = `<h4>No lo cojas mucho que se malacostumbra… ¿y si te dijera que es justo lo contrario?</h4>
            <h5>
                Una reflexión personal con evidencia
              </h5>
              <p>
                Cuando alguien me dice <i>“no lo cojas tanto, se va a malacostumbrar”</i>, siento un escalofrío.<br>
              </p>
              <p>Desde mi experiencia clínica y desde la neurociencia del desarrollo, <b>coger a un bebé, atender su llanto y responder a sus necesidades, no malacostumbra. Lo nutre.</b></p>
              <p>El contacto físico y la respuesta sensible son la base sobre la que tu bebé construye su cerebro, su sistema de regulación emocional y la seguridad en el vínculo. No es teoría: es evidencia.</p>
              <p>He visto padres primerizos llenos de dudas, con miedo de “consentir demasiado”. Y la realidad es clara: <b>los bebés que reciben atención y contacto sensibles crecen más seguros y confiados,</b> tanto en consulta como en la vida diaria.</p>
              
              <h5>
                Lo que dice la ciencia
              </h5>
              <p>
                Los estudios respaldan esto de forma contundente:
              </p>
              <ul>
                <li>🌸 <b><a
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12060749/"
                        >Narvaez et al. (2013)</a></b> mostraron que los bebés que recibieron más contacto físico y respuestas sensibles a su llanto desarrollaron mayor seguridad y apego seguro a los 12 meses.</li>
                <li>🌸 <b><a
                        href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8624.1990.tb02888.x"
                        >Anisfeld et al. (1990)</a></b> demostraron que el porteo y el contacto constante favorecen la <u>formación de vínculos afectivos estables.</u></li>
                <li>🌸 <b><a
                        href="https://www.tandfonline.com/doi/abs/10.1080/15295192.2012.683342"
                        >Feldman (2012)</a></b> explica que la sincronía cuidador-bebé —a través del contacto, la mirada y la respuesta al llanto— regula el <u>sistema de estrés del bebé</u> y potencia su desarrollo emocional.</li>
            </ul>
    
              <p>
                En pocas palabras: atender al llanto, abrazar, coger, mecer… <b>no estropea al bebé, lo fortalece.</b>
              </p>
              
              <h5>Mi experiencia clínica y cotidiana</h5>
              <p>En consulta, he observado casos muy claros:
              </p>
              <ul>
                <li>🌸 Bebés que lloraban mucho durante horas, y tras unos días de porteo sensible y atención al llanto, <b>empezaron a calmarse solos más rápido.</b></li>
                <li>🌸 Padres que temían “malacostumbrar” a sus hijos y que, al cambiar la mirada y responder con calma, <b>descubrieron que el vínculo mejoraba y la ansiedad de ambos disminuía.</b></li>
            </ul>
            <p>
                El contacto físico y emocional no genera dependencia negativa. Genera <b>confianza, seguridad y aprendizaje de regulación emocional.</b>
              </p>
            <h5>Por qué el mito sigue vivo</h5>
            <p>
                Vivimos rodeados de viejos mantras:</b>
              </p>
            <p>
                <i>“No lo cojas, que se malacostumbra”</i>
              </p>
              <p>
                <i>“Déjalo llorar un poco, que aprenda a calmarse”</i>
              </p>
              <p>
                La evidencia actual demuestra que estos consejos no solo están desfasados, sino que pueden <b>aumentar el estrés del bebé y del cuidador,</b> y afectar la regulación emocional temprana.</p>
                <p><b>El llanto no es manipulación,</b> es comunicación y necesidad de regulación.
Responder de manera sensible es, literalmente, <i>una inversión en su desarrollo cerebral y emocional.</i>
</p>
            <p>No necesitas hacerlo perfecto. Pero sí puedes empezar por aquí:</p>
              <ul>
                <li>🌸 Baja tu ritmo</li>
                <li>🌸 Observa antes de actuar</li>
                <li>🌸 Sostén al bebé física y emocionalmente</li>
                <li>🌸 Regula tu propio estado</li>
            </ul>
            <p>
                Porque muchas veces, lo que más necesita tu bebé no es una solución rápida… <b>es un adulto que le ayude a regularse.</b>
              </p>
              <p>
                Con pequeños gestos, como responder a su llanto o portearle cuando está alterado, estás enseñándole a <b>confiar y a autorregularse.</b>
              </p>
              <h5>Reflexión final</h5>
              <p>
                Cuando dejamos de medir cada gesto con miedo a “malacostumbrar”, empezamos a ver que <b>todo contacto que damos es aprendizaje y vínculo.</b>
              </p>
              <p>
                Responder al llanto no debilita, fortalece.<br>
                Abrazar no sobreprotege, enseña seguridad.<br>
                Escuchar no cansa, construye confianza.<br>
              </p>
              <p>
                <b>Donde se comprende para cuidar, donde se cuida para florecer.</b>
              </p>`;

// SIDE BAR

sideBarBtn.addEventListener("click", () => {
  sideBarBtn.classList.toggle("adjust-btn");
  sideBar.classList.toggle("slide");
  plusSign.classList.toggle("hidden");
  minusSign.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (sideBar.classList.contains("slide")) {
    if (!sideBar.contains(e.target) && !sideBarBtn.contains(e.target)) {
      console.log(sideBar.classList);
      sideBarBtn.classList.toggle("adjust-btn");
      sideBar.classList.toggle("slide");
      plusSign.classList.toggle("hidden");
      minusSign.classList.toggle("hidden");
    }
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
    .style.setProperty("--before-content", "'Publicado el 19 de Junio'");
  document
    .querySelector(".header")
    .style.setProperty("--img-position", "center 20%");
  document
    .querySelector(".header")
    .style.setProperty("--image", "url(../public/images/cojas-img.png)");
});

// Al seleccionar un Post determinado

[subbtn_cojas, subbtn_mbl_cojas].forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".header")
      .style.setProperty("--image", "url(../public/images/cojas-img.png)");
    document
      .querySelector(".header")
      .style.setProperty("--before-content", "'Publicado el 19 de Junio'");
    document
      .querySelector(".header")
      .style.setProperty("--img-position", "center 20%");
    postText.innerHTML = latestPost;
  });
});

[subbtn_llanto, subbtn_mbl_llanto].forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".header")
      .style.setProperty("--image", "url(../public/images/llanto.png)");
    document
      .querySelector(".header")
      .style.setProperty("--before-content", "'Publicado el 2 de Mayo'");
    document
      .querySelector(".header")
      .style.setProperty("--img-position", "center 70%");
    postText.innerHTML = `<h4><u>El llanto del bebé no es un problema:</u> es un lenguaje que estás aprendiendo a escuchar</h4>
            <h5>
                Si todos los llantos te suenan igual, no estás fallando…
              </h5>
              <p>
                Al principio, el llanto confunde. Remueve. Abruma.
Y muchas veces hace que aparezca la sensación incómoda: <i>“¿lo estoy haciendo bien?”</i><br>
              </p>
              <p><i>¿Tiene hambre? ¿Sueño? ¿Le pasa algo?</i></p>
              <p>Y en medio de todo eso, hay algo que pesa más de lo que parece: la sensación de no estar llegando.</p>
              <p>Pero déjame decirte algo: <b>no es que no lo estés entendiendo… es que nadie te ha enseñado a escucharlo desde aquí.</b></p>
              
              <h5>
                El llanto comienza en el sistema nervioso
              </h5>
              <p>
                Tendemos a pensar que el llanto es una señal simple: necesidad → respuesta → se acaba.
              </p>
              <p>
                Pero en los primeros meses, esto no funciona así.
              </p>
              <p>
                El bebé no solo expresa necesidades. Expresa estados:
              </p>
              <ul>
                <li>🌸 Activación</li>
                <li>🌸 Desorganización</li>
                <li>🌸 Dificultad para autorregularse</li>
            </ul>
    
              <p>
                Por eso, a veces:
              </p>
              <ul>
                <li>🌸 Come… y sigue llorando</li>
                <li>🌸 Duerme… y se despierta alterado</li>
                <li>🌸 Está en brazos… y no termina de calmarse</li>
            </ul>
              <p>Porque el origen no siempre es externo: a veces pide <b>regulación interna.</b><br>
Y esto cambia completamente la forma de acompañar.
</p>
              <h5>Sí, hay tipos de llanto… pero no son fórmulas exactas</h5>
              <p>Es probable que hayas escuchado que existen distintos tipos de llanto: hambre, sueño, incomodidad…
              </p>
              <p>
                Y sí, la evidencia muestra que el llanto presenta patrones acústicos diferentes según la situación (ritmo, intensidad, tono):
              </p>
              <ul>
                <li>🌸 Hambre: más rítmico y progresivo</li>
                <li>🌸 Sueño: más intermitente e irritante</li>
                <li>🌸 Sobreestimulación: intenso y difícil de modular</li>
            </ul>
            <p>
                Pero ojo: <b>no son categorías cerradas ni universales.</b><br>
El llanto depende también del estado del bebé, del momento y del entorno.
              </p>
              <p>
                Más que “etiquetar”, lo que realmente importa es:
              </p>
              <ul>
                <li>🌸 Observar el contexto</li>
                <li>🌸 Leer el lenguaje corporal</li>
                <li>🌸 Comprender el estado del sistema nervioso</li>
            </ul>
            <h5>Del sonido… al significado</h5>
            <p>
                El sonido puede dar pistas, pero <b>no es suficiente por sí solo.</b>
              </p>
              <ul>
                <li>🌸 Dos bebés pueden llorar parecido y necesitar cosas distintas.</li>
                <li>🌸 Un mismo bebé puede llorar diferente por la misma causa.</li>
            </ul>
            <p>
                No porque estés fallando, sino porque <u>el llanto es un fenómeno complejo.</u></b>
              </p>
              <p>
                Esto, lejos de complicarlo, te libera:
<b>no tienes que acertar un tipo exacto, tienes que aprender a interpretar un conjunto de señales.
</b></p>
              <h5>Cómo acompañar sin estrés</h5>
              <p>
                No necesitas hacerlo perfecto. Pero sí puedes empezar por aquí:
              </p>
              <ul>
                <li>🌸 <b>Respira y acompaña tu propio ritmo,</b> así tu bebé sentirá calma antes de todo.</li>
                <li>🌸 <b>Mira antes de actuar,</b> intenta leer su lenguaje y no solo reaccionar al llanto.</li>
                <li>🌸 <b>Abrázale y acompáñale,</b> física y emocionalmente, incluso cuando parezca que nada funciona.</li>
                <li>🌸 <b>Sintoniza contigo mismo,</b> porque tu tranquilidad ayuda a regular el suyo.</li>
            </ul>
            <p>
                Porque muchas veces, lo que más necesita tu bebé no es una solución rápida…
es un adulto que le ayude a regularse.
              </p>
              <h5>Cuando comprendes, cambia todo</h5>
              <p>
                El cambio no ocurre cuando aciertas siempre, ni cuando el llanto desaparece.
Ocurre cuando:
              </p>
              <p>
                → dejas de vivirlo como un problema<br>
                → empiezas a entenderlo como un proceso
              </p>
              <p>
                Ahí baja la exigencia, baja la tensión…
y aparece algo mucho más importante: <b>la conexión.</b>
              </p>
              <p>
                El llanto no necesita que lo apagues. Necesita que alguien lo escuche de verdad.
Y eso —aunque ahora no lo parezca— ya estás empezando a hacerlo.
              </p>`;
  });
});

[subbtn_plasticidad, subbtn_mbl_plasticidad].forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".header")
      .style.setProperty("--image", "url(../public/images/Plasticidad.png)");
    document
      .querySelector(".header")
      .style.setProperty("--before-content", "'Publicado el 10 de Abril'");
    document
      .querySelector(".header")
      .style.setProperty("--img-position", "center 70%");
    postText.innerHTML = `<h4><u>Plasticidad cerebral en bebés:</u> por qué los primeros tres años son oro</h4>
              <p>
                Imagina que cada mirada, cada caricia, cada palabra que le das a tu bebé <b>se transforma en arquitectura cerebral.</b><br>
Sí, lo que hoy parece pequeño o cotidiano, <b>está construyendo literalmente su futuro.</b><br>
Los primeros tres años no son solo importantes… son <b>oro puro para su cerebro.</b>

              </p>
              
              <h5>
                ¿Qué es la plasticidad cerebral?
              </h5>
              <p>
                La <i>plasticidad cerebral</i> es la <b>capacidad del cerebro de cambiar y reorganizarse</b> a lo largo de la vida, adaptando sus conexiones según lo que experimenta.<br>
En los bebés, esta capacidad es <b>excepcionalmente alta:</b> sus neuronas forman <b>millones de nuevas conexiones cada segundo</b>, y cada interacción con el entorno —tu voz, un abrazo, un juego— <b>moldea la manera en que su cerebro aprende, siente y se relaciona.</b>

              </p>
              <p>
                En otras palabras: la plasticidad cerebral es <b>la herramienta que convierte las experiencias cotidianas en estructuras reales dentro del cerebro.</b><br>
Es por eso que los primeros años se consideran una ventana de oro del desarrollo, donde el impacto de cada experiencia es más profundo y duradero.

              </p>
              
              <h5>Periodos sensibles: ventanas de oro del desarrollo</h5>
              <p>
                Los neurocientíficos llaman a estas etapas “periodos sensibles”: momentos en los que el cerebro es <b>más receptivo a la experiencia.</b><br>
Lo que un bebé experimenta durante los primeros años <b>impacta de manera significativa</b> en su aprendizaje, regulación emocional y formación del vínculo afectivo.

              </p>
              
              <p >📌 <b>Dato poderoso</b>: un estudio longitudinal en Bucarest mostró que bebés criados en instituciones sin vínculos afectivos fuertes tienen <b>patrones de actividad cerebral y desarrollo cognitivo retrasados</b> frente a bebés en familias o acogimiento.<br>
Esto confirma que no solo los genes, sino la calidad de las experiencias tempranas, es crucial.
</p>
              
              <h5>Raíces invisibles que sostienen su futuro</h5>
              <p>
                Cada gesto cotidiano construye la arquitectura de su cerebro:
              </p>
              <ul>
                <li>🌸 <b>La mirada atenta</b> que le das mientras juega.</li>
                <li>🌸 El <b>abrazo que calma</b> y regula su emoción.</li>
                <li>🌸 Las <b>palabras que nombran emociones y objetos</b>, conectando lenguaje y pensamiento.</li>
            </ul>
              <p>Estas “raíces invisibles” serán la base sobre la que crecerá su aprendizaje, resiliencia y vínculo contigo.</p>

              <h5>Lo que vosotros, papás, podéis hacer hoy</h5>
              <ul>
                <li>🌸 <b>Observa y responde</b>: cada interacción importa más de lo que imaginas.</li>
                <li>🌸 <b>Juego libre y contacto físico</b>: no se trata de técnicas complicadas, sino de experiencias seguras y afectuosas.</li>
                <li>🌸 <b>Presencia consciente</b>: tu calma, atención y consistencia son más poderosas que cualquier estímulo externo.</li>
            </ul>
              <p>
                Recuerda: la <b>plasticidad cerebral permite cambios incluso más adelante</b>, pero estas primeras experiencias son <b>las que ponen las bases más sólidas.</b>
              </p>
              <p>
                Tu mirada, tu juego y tu cariño de hoy son el oro que su cerebro necesita.
              </p>
              <p>Fuentes:<br>
            <a href="https://pubmed.ncbi.nlm.nih.gov/15509387/"><u>Knudsen, E. I. (2004)</u></a>. Sensitive periods in the development of the brain and behavior. Journal of Cognitive Neuroscience.<br>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3722610/"><u>Tierney, A. L., & Nelson, C. A. (2009)</u></a>. Brain development and the role of experience in the early years. Zero to Three.<br>
              <a href="https://developingchild.harvard.edu/"><u>Center on the Developing Child at Harvard University</u></a> – National Scientific Council on the Developing Child.
              `;
  });
});

[subbtn_plasticidad, subbtn_mbl_plasticidad].forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".header")
      .style.setProperty("--image", "url(../public/images/Plasticidad.png)");
    document
      .querySelector(".header")
      .style.setProperty("--before-content", "'Publicado el 10 de Abril'");
    document
      .querySelector(".header")
      .style.setProperty("--img-position", "center 70%");
    postText.innerHTML = `<h4><u>Plasticidad cerebral en bebés:</u> por qué los primeros tres años son oro</h4>
              <p>
                Imagina que cada mirada, cada caricia, cada palabra que le das a tu bebé <b>se transforma en arquitectura cerebral.</b><br>
Sí, lo que hoy parece pequeño o cotidiano, <b>está construyendo literalmente su futuro.</b><br>
Los primeros tres años no son solo importantes… son <b>oro puro para su cerebro.</b>

              </p>
              
              <h5>
                ¿Qué es la plasticidad cerebral?
              </h5>
              <p>
                La <i>plasticidad cerebral</i> es la <b>capacidad del cerebro de cambiar y reorganizarse</b> a lo largo de la vida, adaptando sus conexiones según lo que experimenta.<br>
En los bebés, esta capacidad es <b>excepcionalmente alta:</b> sus neuronas forman <b>millones de nuevas conexiones cada segundo</b>, y cada interacción con el entorno —tu voz, un abrazo, un juego— <b>moldea la manera en que su cerebro aprende, siente y se relaciona.</b>

              </p>
              <p>
                En otras palabras: la plasticidad cerebral es <b>la herramienta que convierte las experiencias cotidianas en estructuras reales dentro del cerebro.</b><br>
Es por eso que los primeros años se consideran una ventana de oro del desarrollo, donde el impacto de cada experiencia es más profundo y duradero.

              </p>
              
              <h5>Periodos sensibles: ventanas de oro del desarrollo</h5>
              <p>
                Los neurocientíficos llaman a estas etapas “periodos sensibles”: momentos en los que el cerebro es <b>más receptivo a la experiencia.</b><br>
Lo que un bebé experimenta durante los primeros años <b>impacta de manera significativa</b> en su aprendizaje, regulación emocional y formación del vínculo afectivo.

              </p>
              
              <p >📌 <b>Dato poderoso</b>: un estudio longitudinal en Bucarest mostró que bebés criados en instituciones sin vínculos afectivos fuertes tienen <b>patrones de actividad cerebral y desarrollo cognitivo retrasados</b> frente a bebés en familias o acogimiento.<br>
Esto confirma que no solo los genes, sino la calidad de las experiencias tempranas, es crucial.
</p>
              
              <h5>Raíces invisibles que sostienen su futuro</h5>
              <p>
                Cada gesto cotidiano construye la arquitectura de su cerebro:
              </p>
              <ul>
                <li>🌸 <b>La mirada atenta</b> que le das mientras juega.</li>
                <li>🌸 El <b>abrazo que calma</b> y regula su emoción.</li>
                <li>🌸 Las <b>palabras que nombran emociones y objetos</b>, conectando lenguaje y pensamiento.</li>
            </ul>
              <p>Estas “raíces invisibles” serán la base sobre la que crecerá su aprendizaje, resiliencia y vínculo contigo.</p>

              <h5>Lo que vosotros, papás, podéis hacer hoy</h5>
              <ul>
                <li>🌸 <b>Observa y responde</b>: cada interacción importa más de lo que imaginas.</li>
                <li>🌸 <b>Juego libre y contacto físico</b>: no se trata de técnicas complicadas, sino de experiencias seguras y afectuosas.</li>
                <li>🌸 <b>Presencia consciente</b>: tu calma, atención y consistencia son más poderosas que cualquier estímulo externo.</li>
            </ul>
              <p>
                Recuerda: la <b>plasticidad cerebral permite cambios incluso más adelante</b>, pero estas primeras experiencias son <b>las que ponen las bases más sólidas.</b>
              </p>
              <p>
                Tu mirada, tu juego y tu cariño de hoy son el oro que su cerebro necesita.
              </p>
              <p>Fuentes:<br>
            <a href="https://pubmed.ncbi.nlm.nih.gov/15509387/"><u>Knudsen, E. I. (2004)</u></a>. Sensitive periods in the development of the brain and behavior. Journal of Cognitive Neuroscience.<br>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3722610/"><u>Tierney, A. L., & Nelson, C. A. (2009)</u></a>. Brain development and the role of experience in the early years. Zero to Three.<br>
              <a href="https://developingchild.harvard.edu/"><u>Center on the Developing Child at Harvard University</u></a> – National Scientific Council on the Developing Child.
              `;
  });
});

[subbtn_tTime, subbtn_mbl_tTime].forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".header")
      .style.setProperty("--image", "url(../public/images/tumy-time.png)");
    document
      .querySelector(".header")
      .style.setProperty("--before-content", "'Publicado el 20 de Marzo'");
    document
      .querySelector(".header")
      .style.setProperty("--img-position", "center 70%");
    postText.innerHTML = `<h4><u>Tummy Time:</u> el primer gimnasio natural de tu bebé</h4>
              <p>
                Durante los primeros meses de vida, el desarrollo del bebé
                ocurre a una velocidad extraordinaria. Cada pequeño movimiento,
                cada intento de levantar la cabeza o apoyarse sobre los brazos
                forma parte de un proceso complejo en el que el sistema nervioso
                aprende a organizar el cuerpo.
              </p>
              <p>
                En este contexto, existe una práctica sencilla pero muy
                importante: el <b>tummy time</b>, también conocido como
                <b>tiempo boca abajo del bebé.</b>
              </p>
              <p>
                El <i>tummy time</i> consiste en colocar al bebé
                <b>boca abajo mientras está despierto y bajo supervisión</b>,
                permitiéndole explorar el movimiento desde su propio cuerpo.
                Aunque pueda parecer solo una postura, en realidad es una de las
                primeras formas de actividad motora que ayudan al bebé a
                construir las bases de su desarrollo.
              </p>
              <p>
                Por eso muchos profesionales lo llaman
                <b>el primer gimnasio natural del bebé.</b>
              </p>
              <h5>
                ¿Qué es el tummy time y por qué es importante para el desarrollo
                del bebé?
              </h5>
              <p>
                Cuando un bebé pasa tiempo boca abajo, su cuerpo empieza a
                enfrentarse a pequeños retos motores que estimulan el desarrollo
                neurológico y muscular.
              </p>
              <p>
                En esta posición, el bebé necesita activar diferentes grupos
                musculares para levantar la cabeza, apoyarse en los brazos o
                mirar a su alrededor. Estos pequeños esfuerzos ayudan a
                fortalecer <b>cuello, hombros, espalda y tronco,</b> estructuras
                fundamentales para los futuros hitos motores.
              </p>
              <p>
                Además, el tummy time favorece la
                <b>organización del sistema nervioso</b>, ya que permite
                integrar información sensorial del movimiento, del equilibrio y
                de la posición del cuerpo en el espacio.
              </p>
              <p>
                Es, en esencia, una primera experiencia de
                <b>movimiento activo y exploración del entorno.</b>
              </p>
              <h5>Beneficios del tummy time según la evidencia científica</h5>
              <p>
                Diversos estudios científicos han analizado los efectos del
                tiempo boca abajo durante los primeros meses de vida. Los
                resultados muestran beneficios claros en diferentes áreas del
                desarrollo infantil.
              </p>
              <p>Entre los principales beneficios encontramos:</p>
              <ul>
                <li>🌸 Mejora del <b>control cefálico</b></li>
                <li>🌸 Fortalecimiento de cuello, hombros y tronco</li>
                <li>
                  🌸 Menor riesgo de <b>plagiocefalia o braquicefalia posicional</b>
                </li>
                <li>
                  🌸 Mayor facilidad para alcanzar hitos motores como <b>rodar,
                  girar o gatear</b>
                </li>
                <li>
                  🌸 Relación con una <b>composición corporal</b> más saludable en
                  etapas posteriores
                </li>
              </ul>
              <p>
                Las recomendaciones actuales, apoyadas por la
                <a href="https://www.aap.org/"
                  ><u><i>American Academy of Pediatrics</i></u></a
                >, indican que el tiempo boca abajo debería incorporarse
                <b>desde las primeras semanas de vida</b>, siempre de forma
                progresiva y adaptada a cada bebé.
              </p>
              <h5>¿Cuánto tiempo de tummy time necesita un bebé?</h5>
              <p>
                No existe una cifra exacta válida para todos los bebés, pero sí
                orientaciones aproximadas según la edad.
              </p>
              <p><b>0–2 meses:</b></p>
              <p>
                Entre 10 y 20 minutos al día, repartidos en pequeños momentos.
                Puede realizarse sobre el pecho de mamá o papá, sobre el brazo o
                en una manta.
              </p>
              <p><b>2–4 meses:</b></p>
              <p>
                Entre 30 y 45 minutos al día, con más tiempo de juego en el
                suelo.
              </p>
              <p><b>4–6 meses:</b></p>
              <p>
                Entre 60 y 90 minutos diarios, integrándolo en la rutina de
                juego.
              </p>
              <div style="text-align: center">
                <p>
                  "Lo importante no es hacerlo todo seguido, sino
                  <b>repartirlo en pequeños momentos a lo largo del día."</b>
                </p>
              </div>
              <h5>¿Qué hacer si a mi bebé no le gusta estar boca abajo?</h5>
              <p>
                Es bastante habitual que algunos bebés protesten al principio.
                Estar boca abajo supone un esfuerzo nuevo para su cuerpo.
              </p>
              <p>
                En estos casos, lo más recomendable es empezar
                <b>con tiempos muy cortos</b>, incluso de unos pocos segundos, e
                ir aumentando progresivamente. También ayuda colocar juguetes
                llamativos delante del bebé o interactuar con él mientras está
                en esta posición.
              </p>
              <p>
                Con el tiempo, muchos bebés empiezan a tolerarlo mejor cuando
                descubren que desde esa postura pueden
                <b>mirar, girar la cabeza y explorar el entorno.</b>
              </p>
              <h5>Un pequeño momento que construye grandes bases</h5>
              <p>
                El desarrollo infantil no ocurre de forma automática ni se puede
                acelerar, pero sí puede
                <b>facilitarse creando oportunidades de movimiento.</b>
              </p>
              <p>El <i>tummy time</i> es una de ellas.</p>`;
  });
});

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
    postText.innerHTML = `<h4>
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

[
  subbtn_mbl_chatGPT,
  subbtn_mbl_redLight,
  subbtn_mbl_tTime,
  subbtn_mbl_plasticidad,
  subbtn_mbl_llanto,
].forEach((e) => {
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
