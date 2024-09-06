var data = {
  english: {
    about: "About",
    exhibitions: "Exhibitions",
    works: "Works",
    contactMe: "Contact me",
    visualArtist: "Visual artist",
    sobreMi: "About Me",
    description:
      "       Bachelor's degree and Professor in Visual Arts (National University of the Arts of Argentina -2015/2023-). I have participated in exhibitions in both galleries and publicart institutions, including Galería Pasaje17, Ex-Esma (Espacio Cuatro Columnas), Contemporary Arts Exhibition Centre Casona de los Olivera, Jardín Botánico Carlos Thays and Quinta El Ombú, San Fernando's Art Exhibition Centre. In 2015, the National Salon of Visual Arts selected my work Body Tissues in the Textile Art category.",
    pasaje17: "Contemporary art gallery Pasaje17 ",
    natinalSalon: "National Salon of visual arts",
    casona:
      "Contemporary art space Casona de los Olivera, Parque Avellaneda./ Espacio Cuatro Columnas, Ex-ESMA",
    botanico:
      "Contemporary art space Carlos Thays, Jardín Botánico./  Contemporary art space Casona de los Olivera, Parque Avellaneda.",
    primitiveLand:
      " Group exhibition The spontaneous life of the senses. Contemporary art space Casona de los Olivera, Parque Avellaneda.  Art exhibition on climate change.",
    descriptionLorquianas:
      " Textile hand-made flowers inspired by Federico García Lorca's art work.",
    smallPieces: "Small Pieces",
    meidumPieces: "Medium Pieces",
    largePieces: "Large pieces",
    arrow: "Visit website",
    descriptionPunto: "Mixed media. Approximate dimensions of 10x15 cm.",
    descriptionLuz: " Paintings inspired by Alejandra Pizarnik's poetry.",
    contacth1: "Get in touch",
    mail: "Email address:",
    name: "Name",
    subject: "What is your question about:",
    exhsub: "Exhibition query",
    prisub: "Price query",
    othsub: "Other query",
    message: "Your query...",
    buttonSubmit: "Submit",
  },
  spanish: {
    about: "Sobre mí",
    exhibitions: "Muestras",
    works: "Obra",
    contactMe: "Contacto",
    visualArtist: "Artista visual",
    sobreMi: "Sobre mí",
    description:
      "Licenciada y Profesora en Artes Visuales (U.N.A 2015). Estudió pintura en el taller de Alejandro Avakian e hizo clínica de obra con Gabriel Baggio. Ha participado de exposiciones tanto en galerías como en instituciones artísticas del ámbito público, entre ellas, Galería Pasaje17, Ex-Esma (Espacio Cuatro Columnas), Centro de Exposición de arte Contemporáneo Casona de los Olivera, Jardín Botánico Carlos Thays y Quinta El Ombú, Espacio de Arte Contemporáneo de San Fernando. El Salón Nacional ha seleccionado un trabajo de la artista en el año 2015 para la categoría Arte Textil. ",
    pasaje17: "Galería de Arte Contemporáneo Pasaje 17",
    natinalSalon: "Salón Nacional de Artes Visuales",
    casona:
      "Espacio de Arte Contemporáneo Casona de los Olivera, Parque Avellaneda./  Espacio Cuatro Columnas, Ex-Esma.",

    botanico:
      "Espacio de arte contemporáneo Carlos Thays, Jardín Botánico./ Espacio de arte contemporáneo Casona de los Olivera, Parque Avellaneda.",
    primitiveLand:
      "Muestra grupal La vida espontánea de los sentidos. Espacio de arte contemporáneo Casona de los Olivera, Parque Avellaneda. Exhibición en torno al cambio climático.",
    descriptionLorquianas:
      "Textiles inspirados en las obras teatrales de Federico García Lorca.",
    smallPieces: "Piezas pequeñas",
    meidumPieces: "Piezas medianas",
    largePieces: "Piezas grandes",
    arrow: "Página web",
    descriptionPunto: "Técnicas mixtas. Medidas aproximadas de 10 x 15 cms. ",
    descriptionLuz: "Pinturas inspiradas en la obra de Alejandra Pizarnik.",
    contacth1: "Contacto",
    mail: "E-mail:",
    name: "Nombre:",
    subject: "Asunto:",
    exhsub: "Exhibición/ Muestra",
    prisub: "Precio",
    othsub: "Otro",
    message: "Mensaje...",
    buttonSubmit: "Enviar",
  },
};
const langEl = document.querySelector(".langWrap");
const links = document.querySelectorAll(".langWrap a");
const sections = document.querySelectorAll(
  "#about, #exhibitions, #works, #contactMe, #visualArtist, .sobreMi, .description, .pasaje17, .natinalSalon, .casona,  .botanico, .primitiveLand, .descriptionLorquianas, .smallPieces, .meidumPieces, .largePieces, .arrow, .descriptionPunto, .descriptionLuz, .contacth1, .mail, .name, .subject, .exhsub, .prisub, .othsub, .message, .buttonSubmit  "
);

links.forEach((el) => {
  el.addEventListener("click", () => {
    const attr = el.getAttribute("language");

    sections.forEach((section) => {
      const classKey = section.classList[0];
      const idKey = section.id;

      // Traducción usando clase
      if (data[attr][classKey]) {
        section.textContent = data[attr][classKey];
      }

      // Traducción usando identificador
      if (data[attr][idKey]) {
        section.textContent = data[attr][idKey];
      }
    });

    // Cambiar la clase activa
    document.querySelector(".active").classList.remove("active");
    el.classList.add("active");
  });
});
