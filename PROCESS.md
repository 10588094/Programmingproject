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

### Woensdag 24 januari
- er waren veel landen undifined deze zijn wel in mijn data maar hebben een andere
naam dan de landen in de map. Ik verander de landnamen in mijn data.
- ik kan nu een land-line selecteren in parallel coordinates, maar het lukt niet
waneer er een spatie in de landnaam zit (bijv. South Africa). Misschien landcode
gebruiken of stukje code schrijven om spatie te negeren..?
- toch elke visualisatie een eigen titel gegeven en de hoofdtitel statisch gemaakt
in HTML. De hoofdtitel moet namelijk op alle visualisatie slaan en hoeft daarom niet
dynamisch te zijn.

### Donderdag 25 januari
- de value uit het disorder dropdown menu werd geselecteerd ipv de waarde uit het
country dropdown menu. Opgelost door ze verschillende id's te geven en daarop te
selecteren.
- ik wilde nog een checkbox of slider voor de jaren erbij maken, maar omdat het verschil
in data tussen de jaren nauwelijks zichtbaar is heb ik besloten iets anders te implementeren.
Er kunnen nu twee landlijnen vergeleken worden aan de hand van twee dropdowns.

### Vrijdag 26 januari
- het lukt niet om landen met een spatie in het id te selecteren voor de parallel
coordinates, dus ik heb besloten om toch de landcodes nog toe te voegen aan mijn data.
Daar ben ik nog aan bezig.
- ik heb gezord dat undefined landen geen error meer veroorzaken en er in de titel
staat dat er geen data beschikbaar is, zodat dit duidelijk is voor de user.

### Maandag 29 januari
- ik heb besloten om een mouseover functie te doen op de parallel coordinates
en daarbij ook de namen van de landen te laten zien. Zo kan de gebruiker snel zien
welke lijn welk land is, zonder in de dropdown te hoeven kiezen. Het kan wel lastig
zijn om een bepaald land te vinden zo, dus de dropdown is nog steeds erg handig.

### Dinsdag 30 januari
-  de kleur van de barchart was wat verwarrend, dus ik heb die nu op dezelfde manier
geschaald als de kaart. Hogere score geeft dus rood en lagere score geel.
- omdat de kaart gradieel geschaald is, heb ik gekozen voor een gradient legenda ipv
een legenda met blokjes.

### Woensdag 31 januari
- de dropdown menu's voor landen gaan steeds terug naar Afghanistan, omdat ze opnieuw
geladen worden. Daarom heb ik er een 'Choose country' optie aan toegevoegd, zodat het
niet verwarrend is.
- Omdat de DALY score best wat uitleg nodig heeft heb ik hier een aparte pagina voor.
- ik had graag nog een update functie gemaakt, ipv de hele svg's weg te gooien en opnieuw
te maken. Gezien de tijd ga ik dit niet meer doen helaas. Dit zou wel het eerste zijn
waar ik in een voglend project tijd aan zou besteden. 
