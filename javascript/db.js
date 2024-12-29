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
    nadar: "To swim on sweet waters",
    tejidos: "Body tissues ",
    pan: "Bread and roses",
    aguas: "Murmuring waters",
    tierra: " Primitive land",
    punto: "Blind spot",
    luz: "Lilac light",
    pasaje17: "Contemporary art gallery Pasaje17 ",
    descripcionAguas:
      "Textile art intervention inspired by García Lorca's play 'Yerma'.",
    natinalSalon: "National Salon of visual arts",
    casona:
      "Contemporary art space Casona de los Olivera, Parque Avellaneda./ Espacio Cuatro Columnas, Ex-ESMA",
    botanico:
      "Contemporary art space Carlos Thays, Jardín Botánico./  Contemporary art space Casona de los Olivera, Parque Avellaneda.",
    primitiveLand:
      "Contemporary art space Casona de los Olivera, Parque Avellaneda.  Art exhibition on climate change.",
    descripcionTierra: "Art exhibition on climate change.",
    descripcionCoral:
      " Textile sculpture. Approximate dimensions: 100 x 60 x 30 cm.",
    descriptionLorquianas:
      " Textile hand-made flowers inspired by Federico García Lorca's art work.",
    smallPieces: "Small Pieces",
    meidumPieces: "Medium Pieces",
    largePieces: "Large pieces",
    arrow: "Visit website",
    descriptionPunto:
      "Mixed media paintings. Approximate dimensions of 10x15 cm.",
    descriptionLuz:
      " Paintings inspired by Alejandra Pizarnik's poetry. Mixed media paintings. 14 x 11 cm.",
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
    exhibitions: "Exhibiciones",
    works: "Obra",
    contactMe: "Contacto",
    visualArtist: "Artista visual.",
    sobreMi: "Sobre mí",
    description:
      "Licenciada y Profesora en Artes Visuales (U.N.A 2015). Estudió pintura en el taller de Alejandro Avakian e hizo clínica de obra con Gabriel Baggio. Ha participado de exposiciones tanto en galerías como en instituciones artísticas del ámbito público, entre ellas, Galería Pasaje17, Ex-Esma (Espacio Cuatro Columnas), Centro de Exposición de arte Contemporáneo Casona de los Olivera, Jardín Botánico Carlos Thays y Quinta El Ombú, Espacio de Arte Contemporáneo de San Fernando. El Salón Nacional ha seleccionado un trabajo de la artista en el año 2015 para la categoría Arte Textil. ",
    nadar: "Nadar en agua dulce",
    tejidos: "Tejidos",
    pan: "Pan y rosas",
    aguas: "Aguas rumorosas",
    tierra: "Tierra primitiva",
    punto: "Punto ciego",
    luz: "Luz lila",
    pasaje17: "Galería de Arte Contemporáneo Pasaje 17",
    descripcionAguas:
      "Intervención textil inspirada en la obra 'Yerma' de García Lorca.",
    natinalSalon: "Salón Nacional de Artes Visuales",
    casona:
      "Espacio de Arte Contemporáneo Casona de los Olivera, Parque Avellaneda./  Espacio Cuatro Columnas, Ex-Esma.",

    botanico:
      "Espacio de arte contemporáneo Carlos Thays, Jardín Botánico./ Espacio de arte contemporáneo Casona de los Olivera, Parque Avellaneda.",
    primitiveLand:
      "Espacio de arte contemporáneo Casona de los Olivera, Parque Avellaneda. Exhibición en torno al cambio climático.",
    descripcionTierra: "Exhibición en torno al cambio climático.",
    descripcionCoral:
      "Ecultura textil. Medidas aproximadas: 100 x 60 x 30 cms.",
    descriptionLorquianas:
      "Textiles inspirados en las obras teatrales de Federico García Lorca.",
    smallPieces: "Piezas pequeñas",
    meidumPieces: "Piezas medianas",
    largePieces: "Piezas grandes",
    arrow: "Página web",
    descriptionPunto: "Técnicas mixtas. Medidas aproximadas de 10 x 15 cms. ",
    descriptionLuz:
      "Pinturas inspiradas en la obra de Alejandra Pizarnik. Técnicas mixtas de 14 x 11 cms.",
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
  "#about, #exhibitions, #works, #contactMe, #visualArtist, .sobreMi, .description, .pasaje17, .descripcionAguas, .nadar,  .tejidos, .pan, .aguas, .tierra, .punto, .luz,  .natinalSalon, .casona,  .botanico, .primitiveLand, .descripcionTierra, .descripcionCoral,   .descriptionLorquianas, .smallPieces, .meidumPieces, .largePieces, .arrow, .descriptionPunto, .descriptionLuz, .contacth1, .mail, .name, .subject, .exhsub, .prisub, .othsub, .message, .buttonSubmit  "
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
