import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { format } from '@formkit/tempo';

const styles: StyleDictionary = {
  header: {
    fontSize: 22,
    bold: true,
    alignment: 'center',
    margin: [0, 60, 0, 20], // left, top, right, bottom
  },
  body: {
    alignment: 'justify',
    margin: [0, 0, 0, 70],
  },
  signature: {
    bold: true,
  },
  date: {
    alignment: 'right',
    margin: [20, 20],
  },
  footer: {
    alignment: 'center',
    fontSize: 10,
    italics: true,
  },
};

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
};

const formatedCurrentDate = () => {
  // Crear un nuevo objeto Date para la fecha actual
  const fechaActual = new Date();

  return format(fechaActual, { date: 'full' });
};

export const getEmploymentLetter = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    pageMargins: [40, 60, 40, 60],
    styles: styles,

    header: {
      columns: [
        logo,
        {
          text: `${formatedCurrentDate()}`,
          style: 'date',
        },
      ],
    },

    footer: {
      text: 'Este documento es una constancia de empleo y no representa un compromiso laboral',
      style: 'footer',
    },

    content: [
      {
        text: 'CONSTANCIA DE EMPLEO',
        style: 'header',
      },
      {
        text: `
        Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa],
        por medio de la presente certifco que [Nombre del Empleado] ha sido empleado en nuestra
        empresa desde el [Fecha de Inicio del Empleado]. \n\n
        Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del
        Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus
        labores. \n\n
        La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas
        semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y
        procedimientos establecidos por la empresa. \n\n
        Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.
        `,
        style: 'body',
      },
      {
        text: 'Atentamente',
        style: 'signature',
      },
      { text: '[Nombre del Empleador]', style: 'signature' },
      { text: '[Cargo del Empleador]', style: 'signature' },
      { text: '[Nombre de la Empresa]', style: 'signature' },
      { text: '[Fecha de Emisión]', style: 'signature' },
      // {
      //   text: `
      //     Atentamente,
      //     [Nombre del Empleador]
      //     [Cargo del Empleador]
      //     [Nombre de la Empresa]
      //     [Fecha de Emisión]

      //   `,
      // },
    ],
  };

  return docDefinition;
};
