# Consultant Profile (v1)

Dieses Repository enthält den Code, der für die Erstellung des Consultant-Profils genutzt wird. Im Ordner `profiles` sind zwei Beispiel-Profile von *Michael Scott* zu finden. Dies ist der Ordner, in dem wir hauptsächlich arbeiten werden.


## Allgemeine Funktionsweise

Das Script `index.js` geht in den Ordner `profile` und liest die alle Datei mit Endung `.yaml`, die es findet. Diese Dateien enthalten die Daten des Profils, die das Script nutzt, um zusammen mit den HTML/CSS Dateien die Webseite zu erstellen, von dem aus man das Profil auch als PDF drucken kann. Die Daten des Profils in einer eigenen Text-Datei auszulagern, ermöglicht es mehrere Profile, oder auch mehrere Versionen desselben Profils, mit einer einheitlichen Struktur und einem einheitlichen Design zu verwalten. Änderungen am Design oder an der Struktur müssen nur an einer zentralen Stelle vorgenommen werden, anstatt separat in jedem einzelnen Profil. Die Profile im neuen Design müssten allerdings neu ausgedruckt werden.

## Workflow

Um ein eigenes Profil zu erstellen, kann man sich an dem Beispiel-Profil orientieren. Hierbei gibt es zwei Möglichkeiten vorzugehen:

1. Man arbeitet nur mit dem text. Siehe hierzu Unterkapitel **Textbasierter Workflow**.
    - Vorteil: unkomplizierte Einrichtung
    - Nachteil: keine direkte Visualisierungsmöglichkeiten
2. Man richtig sich seine eigene kleine Umgebung ein. Siehe hierzu Unterkapitel **Webbasierter Workflow**.
    - Vorteil: die Möglichkeit das Ergebnis direkt anzuzeigen und sofort als PDFs speichern zu können
    - Nachteil: höherer Einrichtungsaufwand

In jedem Fall muss man sich den Code herunterladen. Dies geht über den grünen "<> Code" Knopf und von dort aus auf "Download ZIP".

### Textbasierter Workflow

1. Nachdem die Dateien heruntergeladen und entpackt wurden, navigiere zum Ordner `profiles`. In diesem befindet sich alles, was man braucht. 
2. Die Datei `micheal-scott-projekt.yaml` ist Michaels Profil in Text-Form.
3. Öffne die `.yaml` Datei und versuche den Inhalt nachzuvollziehen.
    - Am besten ist es, sich Visual Studio Code herunterzuladen und sich die Datei darin anzuschauen.
    - Im Kapitel **Profil Formatierung** ist alles im Detail aufgeführt.
<<<<<<< HEAD
4. Als Beispiel kann man sehen, dass in der Datei unter dem Punkt `portrait` auf das Bild namens `portrait--michael-scott.png` verwiesen wird. Dieses Bild befindet sich im Unterordner `images`. Da wir uns im Ordner `profiles` befinden, sieht der volle Verweis folgendermaßen aus: `profiles/images/portrait--michael-scott.png`. 
5. Nachdem alles nachvollzogen wurde, kopiere die Datei `micheal-scott-projekt.yaml` und benenne sie in deinen Namen um.
6. Nutze die neue `.yaml`-Datei mit deinem Namen um dein eigenes Profil zu erstellen:
=======
4. Als Beispiel kann man sehen, dass in der Datei unter dem Punkt `portrait` auf das Bild namens `MichaelScott.png` verwiesen wird. Dieses Bild befindet sich im Unterordner `Michael-Scott`. Da wir uns im Ordner `input` befinden, sieht der volle Verweis folgendermaßen aus: `input/Micheal-Scott/MichaelScott.png`. 
5. Nachdem alles nachvollzogen wurde, erstelle einen neuen Ordner und gebe ihm deinen Namen.
6. Nenne die Datei `micheal-scott-projekt.yaml` in deinen Namen um.
7. Nutze die `.yaml` Datei und den Ordner mit deinem Namen, um dein eigenes Profil zu erstellen.
>>>>>>> 635486dc685186b30c35c0f633349939b7239dcd
    - Achte dabei auf die Formatierungen!
    - Lade nötige Bilder (Badges für Zertifikate oder Firmenlogos für Firmen) herunter und lege sie in den Unterordner mit deinem Namen ab.
    - Bei Unklarheiten kannst du dir die Beispielprofile anschauen.
7. Nachdem alles fertig ist, kannst du deine `.yaml`-Datei und zugehörige Bilder absenden.

### Webbasierter Workflow

1. Installiere Visual Studio Code (VSC):
    - https://code.visualstudio.com/
2. In VSC, bei den Icons links klicke auf *Extensions* und gebe in der Suche "Live Server" ein.
    - Finde und installiere die Erweiterung namens "Live Server" von "Ritwick Dey".
3. In VSC, gehe zurück zum Explorer (oberstes Icon im Reiter links) und öffne den **webprofil** Ordner, den du von hier heruntergeladen und auf deinem PC entpackt hast. (File -> Open Folder...)
4. Alle Dateien des Projekts müssten nun im linken Panel von VCS zu sehen sein, wie dieses `readme.md`, aber auch der `profiles` Ordner mit allen Profil-Dateien, usw.
5. In VSC, in dem blauen Streifen ganz unten auf der rechten Seite müsste sich ein Knopf befinden, auf dem "Go Live" steht. Klicke auf diesen Knopf.
    - Es wird automatisch die Webseite auf deinem Standardbrowser geöffnet. 
    - Zuerst wird eine Liste mit allen gefundenen `.yaml`-Dateien im `profiles` Ordner angezeigt, klicke auf das Profil, welches du bearbeiten oder anzeigen möchtest
    - Alle Änderungen, die jetzt in VSC gemacht und abgespeichert werden, werden automatisch hier angezeigt (es kann sein, dass man den live-server manchmal neu starten muss).
    - Die Profile wurden alle mit **CHROME** entworfen! Um die Einheitlichkeit und Funktionsfähigkeit zu garantieren, sollte entsprechend die neuste Version von Chrome verwendet werden. 
        - Sollte Chrome nicht dein Standardbrowser sein, kannst du den Link herauskopieren und in Chrome öffnen. Dieser müsste etwa so aussehen: `http://127.0.0.1:5500/index.html`
6. Ist die Seite erst einmal in Chrome geöffnet, drücke `f12`, um dessen Konsole zu öffnen. Hier kommen eventuelle Hinweise und Warnmeldungen.
8. Gehe nun genau so vor wie im oberen Unterkapitel **Textbasierter Workflow** und beobachte währenddessen das Ergebnis in Chrome. 
9. Du kannst mehrere Versionen deines Profils erzeugen und sie alle unterschiedlich benennen. 
10. Nach dem Absenden kannst du auch das Profil vom Browser aus mit `command + P` oder `control + P` als PDF drucken.
    - Lasse die Ränder auf Standard. 
    - Das Häkchen bei Kopf- und Fußzeilen kann weg, jedoch sollten die Hintergrundgrafiken aktiviert bleiben.

## Profil Formatierung

Dieses Kapitel nutzt `profiles/michael-scott-prozess.yaml` als Beispiel.

Die Daten aus den `.yaml` Dateien werden im Script zu Objekten umgewandelt. Es ist daher sehr wichtig, dass die Formatierung eingehalten wird.

### Allgemeines zu .yaml

#### Key-Value

Die komplette Datei basiert auf einem `key-value` Prinzip. Beispielsweise im Fall `name: "Michael Scott"` ist `name` der Key und `"Michael Scott"` der Value. Keys werden immer von einem `: ` (Doppelpunkt + Leerzeichen) gefolgt. Values stehen üblicherweise in Anführungsstrichen `" "`, wobei reine Zahlen ohne Anführungsstriche auskommen. 

#### Listen

Manche `value`s können auch Listen sein, die weitere `key-value`-Pärchen enthalten, z.B.:
```
languages:
  - name: "Deutsch"
    level: 3
  - name: "Englisch"
    level: 2
```
Jedes Listen-Element besteht in diesem Fall aus zwei `key-value`-Pärchen: einmal `name: "Deutsch"` und einmal `level: 3`. Jedes List-Element enthält seinen eigenen Bindestrich `  - `, egal wie viele `key-value`-Pärchen darin enthalten sein mögen. 

Hierbei ist die **Einrückung** unbedingt zu beachten. Es ist auch wichtig, dass die Bindestriche von einem Leerzeichen gefolgt werden. Folgende Liste wäre also **ungültig**:
```
languages:
-name: "Deutsch"
level: 3
    -name: "Englisch"
     level: 2
```

List-Elemente können aber auch nur aus `values` bestehen. In diesen Fällen enthält ein `key` mehrere `values`, wie die `highlights` in den Projekten, oder den Paragrafen in `profile` (hierzu mehr im Unterkapitel **Profil-Spezifische Regelungen**)

#### Bilder

Manche `key`s erwarten Bilder. Dessen `value`s sind der Pfad zu dem jeweiligen Bild. Dieser kann ein direkter Link aus dem Internet sein, oder ein relativer Pfad zu einem Bild in deinem Unterordner. 

Beispiel relativer Pfad:
`portrait: "input/Michael-Scott/MichaelScott.png"`

Beispiel URL:
`portrait: "https://media.licdn.com/dms/image/C5603AQFvja-1mePjwA/profile-displayphoto-shrink_800_800/0/1639152779158?e=2147483647&v=beta&t=2gZG1lCCPUvQ2rsC6GdoaPQIDcNet5BdrPESsj5mRL8"`

#### Kommentare

Das Script liest die `.yaml` Datei Zeile für Zeile und konvertiert das Gelesene dabei in Programmierobjekte. Es gibt jedoch die Möglichkeit, dem Script zu sagen, dass er gewisse Zeilen überspringt. Dies macht man mit dem Ziffer-Symbol `#` - alles dahinter wird ignoriert.

In Michaels Profil kann man sehen, dass zwei Zeilen mit dem key `portrait` vorkommen: einmal mit relativem Pfad und einmal mit einer URL. Dies ist aber nicht weiter problematisch, da eine der beiden Zeilen "auskommentiert" wurden. Hierdurch kann man innerhalb einer Datei zwischen mehreren Bild-Quellen wechseln. 

Üblicherweise jedoch werden Kommentare genutzt um im Code Notizen hinzuzufügen.

### Profil-Spezifische Regelungen

- Jeder `key` kommt genau einmal vor, es sei den er ist Teil eines List-Elements.
- Manche `key`s sind optional und manche nicht.
    - Versuche möglichst alle auszufüllen. 
    - Sollte ein `key` nicht ausgefüllt werden können - beispielsweise wenn man nicht bei LinkedIn angemeldet ist - sollte man den `key` trotzdem stehen lassen und lediglich den `value` leer lassen, also so: `linkedin: ""`.
    - Im Zweifel probiere es aus und beobachte, wie es sich auf die Webseite auswirkt und was in der Konsole angezeigt wird.
- Es gibt nur die `key`s, die auch im Profil von Michael genannt wurden.
- Die `key`s namens `level` erwarten eine Zahl von 1 bis 8. Dies ist nicht optional.
- Listen dürfen beliebig viele List-Elemente enthalten.
- Die Kurzbeschreibung ist Teil des `key`s namens `profile`.
    - Jeder Paragraf ist hier ein List-Item und wird in einer Zeile geschrieben.
- Bei den `key`s `projects` und `education` handelt es sich um komplexere Objekte, wobei im Grunde die gleichen Regeln gelten wie bisher. Es ist nur auch hier wichtig auf die richtige Einrückung zu achten. 
    - Die `highlights` erwarten eine Liste an Text-`value`s, wovon jedes als ein eigener Punkt im Profil dargestellt wird.
