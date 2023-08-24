# 24e Augusti

## Live-kod

[Live coding examples](live-coding/)


## Material (från förra tillfället)
Undersök dokumentationen invrigt! Vid nästa tillfälle kommer vi att fokusera på det som heter "interfaces" och "types".

Länk till dokumentation https://www.typescriptlang.org/docs/

Samtliga youtube videos från följande lista https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI kan användas som kompletterande material. Vi går igenom allt fram till (inkluderat) avsnitt 18 med generic.

### Extra
[Olika sätt att skapa dynamisk mappning](https://www.sharooq.com/how-to-use-dynamic-keys-with-typescript-objects)

## Övning
Typescript handlar mycket om att skapa "clean code" så antag följande scenario;

Hjälp! Din arbetsgivare har nyss fått för sig att Typescript är det senaste heta och vill nu att all gammal kod görs om till typescript.

### Steg 1 (Rensa upp koden)
Läs igenom följande [freecamp clean code](https://www.freecodecamp.org/news/clean-coding-for-beginners/). Ta sedan en gammal projektkod, förslagvis memoryspelet från en tidigare kurs. Det finns två fall då du istället bör fråga en medstuderande om deras projektkod, dessa är; 
1. Du inte har tillgång till en tidigare projektkod där vanilla javascript användes.
2. Du vill ha en större utmaning genom att arbete med en okänd kod.

Försök sedan, med hjälp från freecamp clean code, att refactora (göra om) koden så att den följer de riktlinjer som står i artikeln. 

### Steg 2 (Lägg till typescript)
Initiera en typescript config fil genom att skriva kommandot *"npx tsc --init"*. Fokusera sedan på att översätta javascript till typescript genom att ange paramter typer till funktioner, returntyper m.m. Var inte rädd för att skapa flera filer. För att kompilera flera filer till en så kan du i *tsconfig.json* lägga till raden
```json
"compilerOptions": {
  "outFile": "dist/bundle.js"
}
```
Observera att du då behöver uppdatera index.html filen så att den använder bundle.js istället för de tidigare länkade js filerna!

### Steg 3 (Refactor, igen!?)
Målet med att lägga till typescript är att koden ska bli tydligare. Läs igenom koden igen och fundera på om den verkligen har blivit tydligare, om svaret är nej så är det dags att dela upp koden i flera filer. Det föreslås följande struktur

*Detta är endast ett utkast och du får gärna ändra/lägga till på förslaget*
```
src
  index.ts // fil för att styra huvudlogiken
  - type
    - *.ts // filer som definierar olika typer i programmet
  - service
    - cacheService.ts // en service för att hämta och lagra till local/session storage
    - domService.ts // en service för att skapa interaktion med DOM api:et
    - *.ts // övriga tjänster som integrerar med utomstående api:n, ex. netServices för multiplayer
  - game
    - rules.ts // logik för att validera spelar drag
    - points.ts // logik för att spara och hämta poäng
```

### Steg 4 (Jämföra)
Jämför lösningen mot en annans lösning. Detta antar inte att deras lösning är klar, utan snarare endast påbörjade så att ni kan diskutera vad som blir "snyggare", alternativt mer "clean (code)".

