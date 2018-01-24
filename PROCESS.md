### Maandag 15 januari
- ik heb mijn vier datasets in een array gezet, zodat ik er goed mee kan werken.
- ik heb alle code in 1 mapje 'code' gezet.
- ik heb populatie cijfers aan mijn database toegevoed omdat ik mijn data op populatie
wilde schalen. India en China werden namelijk heel donker gekleurd en tussen de
andere landen was bijna geen verschil te zien. Dit bleek uiteindelijk overbodig werk,
want na schaling op popualtie was het nog steeds niet goed gekleurd + ik kwam er
achter dat de data al aan de hand van populatie cijfers berekend is. Nu gebruik ik
een scale.log.
- verder weer bezig geweest om mijn svg's en g's op de goede plek in de div te krijgen.

### Dinsdag 16 januari
- kaart gevonden zonder antartica, dat ziet er mooier uit op de pagina en er is toch
geen data van antartica
- kaart op de goede plek gekregen in de pagina + goede afmetingen
- assen van de barchart goed gekregen en op de goede plek
- gekeken naar de parallel coordinates, maar nog niet begrepen hoe het werkt
- wat problemen met het gebruiken van de data, daarom nog geen bars in de barChart
- problemen met de slider: d3.slider() is geen functie, mis ik iets mijn html? Kan
het niet vinden tot nu toe
- morgen eerst de data uitzoeken / hulp vragen

### Woensdag 17 januari
- kleuren van de kaart aangepast
- lang bezig geweest om data in een andere structuur te zetten
- bars in barchart gemaakt
- slider zonder functionaliteit gemaakt

### Donderdag 18 januari
- Gezorgd dat land, jaar en stoornis in loadData kunnen worden ingesteld, zodat
een update functie makkelijker implementeren wordt later
- nog een keer gekeken naar parallel coordinates, maar nog steeds niet begrepen.
Helaas kon ik geen vragen stellen want het dak was er afgevallen :(

### Maandag 22 januari
- bij het maken van de update functie voor disorders maak ik nu de hele visualisatie
opnieuw. Ik probeerde om alleen de bars van de barchart in een updateFunctie te zetten
maar moest bijna alle code daarin zetten. De y-as moet daar immers ook in en de
'.on mouseover' functie ook, want deze is gelinkt aan de bars. Daarom heb ik ervoor
gekozen om toch de hele visualisatie opnieuw te laden. Als ik aan het eind nog tijd
heb kan ik kijken hoe ik dit efficenter kan maken.
- de parallel coordinates is nu niet heel nuttig omdat er twee outliers zijn, waarschijnlijk
China en India. Morgen kijken of ik hier een log functie kan gebruiken om de assen
te schalen.
- ik heb besloten om een aparte div en js bestand voor de titel te maken. Ik wilde
dat de titel boven in het midden kwam dus kon daarom niet bij een andere visualisatie.
Ook moet hij wel geupdate kunnen worden dus dat is handiger in js dan in html.

### Dinsdag 23 januari
- het bleek dat de schaal op de parallel coordinates niet goed ging doordat er niet
logaritmisch geschaald kan worden wanneer er een 0 in de dataset zit. Daarom heb ik
besloten om alle 0 waarden in 0.01 te veranderen. Ook in de map en barchart schaal ik
logaritmisch dus vandaag wil ik deze verandering al in loadData zetten (ipv alleen bij
parallel coordinates).
- Voor de dropdown met landen leek was het niet handig om de dropdown op dezelfde manier
te maken als die voor disorders. Er zijn namelijke veel te veel landen in mijn data om
allemaal in  mijn html te zetten. Gelukkig kwam een klasgenoot met een andere oplossing.
Misschien pas ik deze later nog toe bij disorders voor de consistentie.
