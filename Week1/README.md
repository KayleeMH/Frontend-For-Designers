Eerste project van Frontend voor Designers- Maak een muzieklijst waarin je de volgorde kan veranderen.

Ik heb gekozen voor een Drap & Drop principe. Hiervan wist ik echter nog niks af en veel voorbeelden online gebruiken libraries of JQuery, echter heb ik het geprobeerd te schrijven in puur javascript. Bij een D&D komen veel elementen kijken, dat had ik niet verwacht. 
Er is dragstart, dragend, droptarget en nog vele anderen. Als de drag begint (dragstart) kan je een functie uitvoeren, bijvoorbeeld dat de items er anders uitzien, of dat je een "ghost" image krijgt die je kan slepen. 
De default is dat je items niet kunt verplaatsen, dus dit moet je eerst uitschakelen met preventDefault. Daarnaast is er nog drop (het echt droppen van het item), een droptarget (waar mag/kan je het item droppen), dragover (als je items over een valid target worden verplaats), dragenter (het enteren van een valid droptarget) en dragexit (het verlaten van een target). Om iets drag-baar te maken geef je het item draggable="true" mee in HTML, daarna kan je stap voor stap alle stappen uitschrijven en de vormgeving veranderen door een class te togglen. Ook moet het item wat je verplaats opgeslagen worden, zodat de browser het kan verplaatsen. En wat je met het item kan doen, copy, move etc. 

De drag&drop werkt niet volledig in deze demo, alleen het eerste nummer kan één keer gedropt worden, daarna liep ik vast met het coderen. Het liefst had ik gewild dat alle items in de list verplaatst konden worden met een mooie animatie om de verplaatsing duidelijk te maken, echter is dit niet gelukt. 

Als eerste versie heb ik gekozen voor blokken die naadloos op elkaar aansluiten met neutrale grijstinten zodat elk genre erbij past. Echter tijdens het drag&drop proces, heb ik gekozen voor een blauwe accentkleur, zodat het opviel en de gebruiker kan zien waarmee hij/zij bezig is. [Versie1](Versie1-%20Grijs)

Als twee versie heb ik gebruik gemaakt van verschillende animaties, om te kijken hoe ik met behulp van kleur de gebruiker verduidelijking kon bieden. [Versie2](Versie2%20-%20Animate)

Als derde versie heb ik de layout en vormgeving van de eerste gebruikt, en de animatie van de tweede versie toegevoegd. [Versie3](Versie3)
