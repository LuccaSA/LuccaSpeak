export class Section {
	static tribe = new Section('La tribu');
	static geeks = new Section('Geeks speak');
	static tools = new Section('Les outils');
	static marketing = new Section('Marketing');
	static consulting = new Section('Consulting');
	static sales = new Section('Sales');
	static all = new Section('Tous les mots');

	constructor(
		public name: string,
	) {}
}