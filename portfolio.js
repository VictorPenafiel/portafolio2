import emoji from "react-easy-emoji";

export const greetings = {
	name: "Tu sitio web 3.0",
	title: "¡Hola, mundo!",
	description:
		"Diseñamos sitios web modernos y funcionales para su empresa o emprendimiento personal; Responsivos (adaptable a celulares, Tablet, Notebook),y totalmente personalizados a sus necesidades: Carro de compras, Carrusel de imágenes, Integración con Redes Sociales, etc. Interesados WhatsApp: +569 8769 2950 - victorpenafiel@gmail.com",
	resumeLink: "https://www.victorpenafiel.cl",
};

export const openSource = {
	githubUserName: "VictorPenafiel",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://web.facebook.com/victorpenafiel",
	instagram: "https://www.instagram.com/newendochile/",
	twitter: "https://twitter.com/newen_do",
	github: "https://github.com/VictorPenafiel",
	linkedin: "https://www.linkedin.com/in/victorpenafiel/",
};

export const skillsSection = {
	title: "Las tecnologías que manejo",
	subTitle:
		"",
	skills: [
		emoji(
			"⚡ Front End: Somos capaces de crear una interfaz de usuario interactiva, capaz de trabajar con grandes bases de datos"
		),
		emoji(
			"⚡ Back End: Nos encargamos de todos los procesos necesarios para que funcione tu sitio web, es decir, todas las operaciones que ocurren en los servidores pero que no son posibles de visualizar por el usuario."
		),
		emoji(
			"⚡ Codificamos piezas de software de baja/mediana complejidad utilizando lenguaje Python, para resolver problemáticas comunes de acuerdo a tus necesidades."
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Diseño web", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "72",
	},
	{
		Stack: "Programando",
		progressPercentage: "78",
	},
];

export const educationInfo = [
	{
		schoolName: "Edutecno",
		subHeader: "Desarrollador FullStack Python",
		duration: "Diciebre 2021 - Junio 2022",
		desc: "Bootcamp",
		descBullets: [
			"Newendo",
			"Tu sitio web 3.0",
			"Onlyflans"
		],
	},
	{
		schoolName: "Universidad de Valparaíso",
		subHeader: "Cine",
		duration: "2010 - 2013",
		desc: "Producción cinematográfica",
		descBullets: [
			"El Útero",
			"Amanita Mía",
			"Samy frenk y Yo"

		],
	},

];

export const experience = [
	
];

export const projects = [

	{
		name: "Newendo (Aplicación web)",
		desc: "Aplicación web desarrollada en Django, realizada para dar a conocer una nueva aplicación de desarrollo personal.",
		link: "https://newendo.herokuapp.com/",
	},
	{
		name: "Portafolio",
		desc: "Sitio totalmente responsivo de un portafolio web.",
		link: "https://www.victorpenafiel.cl/",
	},
	{
		name: "Ricomida (Ecommerce)",
		desc: "Sitio web totalmente responsivo que simula un local de comida.",
		link: "https://elated-shockley-d85a70.netlify.app/",
	},
	{
		name: "Cuppon (Ecommerce)",
		desc: "Sitio web totalmente responsivo que simula un negocio de ofertas.",
		link: "https://wonderful-mirzakhani-266d51.netlify.app/",
	},
	
];

export const feedbacks = [
	{
		name: "Magdalena Carrasco",
		feedback:
			" Muy buen profesinal que pretende rellenar la falta de algunos conocimientos con una predisposicion y una dedicacion absoluta a tu proyecto.",
	},
	{
		name: "Hernán Carreño",
		feedback:
			" Dará todo de si para entregar un trabajo que cumpla todas tus expectativas, en mi proyecto fue de gran ayuda, ya que me asesoro para llegar a resultados que cumplían más de lo esperado.",
	},

];
