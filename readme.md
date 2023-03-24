# Consultant Profile

Dieses Repository enthält den Code, der für die Erstellung des Consultant-Profils genutzt wird. Im Ordner `input` ist ein Beispiel-Profil von *Michael Scott* zu finden. Dies ist der Ordner, in dem man arbeiten wird. Im Ordner `output` ist Michaels Profil als PDF zu sehen.

## Allgemeine Funktionsweise

Das Script `script.js` geht in den Ordner `input` und ließt die erste Datei mit Endung `.yaml`, die es findet. Diese Datei enthält die Daten des Profils, die das Script nutzt, um zusammen mit den HTML/CSS Dateien die Webseite zu erstellen, von dem aus man das Profil auch als PDF drucken kann. Die Daten des Profils in einer eigenen Text-Datei auszulagern, ermöglicht es mehrere Profile, oder auch mehrere Versionen desselben Profils, mit einer einheitlichen Struktur und einem einheitlichen Design zu verwalten. Änderungen am Design oder an der Struktur müssen nur an einer zentralen Stelle vorgenommen werden, anstatt separat in jedem einzelnen Profil. Die Profile im neuen Design müssten allerdings neu ausgedruckt werden. Dies könnte aber in Zukunft auch automatisiert werden.

## Workflow

Um ein eigenes Profil zu erstellen, kann man sich an dem Beispiel-Profil orientieren. Hierbei gibt es zwei Möglichkeiten vorzugehen:

1. Man arbeitet nur mit dem text. Siehe hierzu Unterkapitel **Textbasierter Workflow**.
    - Vorteil: unkomplizierte Einrichtung
    - Nachteil: keine Visualisierungsmöglichkeiten
2. Man richtig sich seine eigene kleine Umgebung ein. Siehe hierzu Unterkapitel **Webbasierter Workflow**.
    - Vorteil: die Möglichkeit das Ergebnis anzuzeigen und selbst die PDFs speichern zu können
    - Nachteil: höherer Einrichtungsaufwand

In jedem Fall muss man sich den Code herunterladen. Dies geht über den grünen "<> Code" Knopf und von dort aus auf "Download ZIP".

### Textbasierter Workflow

- Nachdem die Dateien heruntergeladen und entpackt wurden navigiere zum Ordner `input`. In diesem befindet sich alles was man braucht. 
- Im Unterordner `Michael-Scott` ist eine weitere `.yaml` Datei zu finden, namens `michael-scott-prozess.yaml`. Diese wird nicht gebraucht und kann gelöscht werden. 
- Öffne die `.yaml` Datei und versuche den Inhalt nachzuvollziehen.
    - Am Besten ist es sich Visual Studio Code herunterzuladen und sich die Datei darin anzuschauen.
    - Im Kapitel **Profil Formatierung** ist alles im Detail aufgeführt.
    - Als Beispiel kann man sehen, dass `portrait` auf das Bild namens `MichaelScott.png` im Unterordner `Michael-Scott` verweist. Da wir uns im Ordner `input` befinden, sieht der volle Verweis folgendermaßen aus: `portrait: "input/Micheal-Scott/MichaelScott.png"`.
- Ändere den Namen der Datei und dem Unterordner in deinen Namen um, und ersetzte das Bild von Michael Scott mit deinem.
- Erstelle dein eigenes Profil.
    - Achte dabei auf die Formatierungen!
    - Lade nötige Bilder (Badges für Zertifikate oder Firmenlogos für Firmen) herunter und lege sie in den Unterordner mit deinem Namen ab.
- Nachdem alles fertig ist, kannst du den `input` Ordner in eine zip Datei komprimieren und absenden.

### Webbasierter Workflow

- Installiere Visual Studio Code:
    - https://code.visualstudio.com/
- Bei den Icons links clicke auf *Extensions* und gebe in der suche "Live Server" ein.
    - Finde und installiere die Erweiterung namens "Live Server" von "Ritwick Dey".
- Gehe zurück zum Explorer (oberstes Icon im Reiter links) und öffne den **webprofil** Ordner, den du von hier heruntergeladen und auf deinem PC entpackt hast. (File -> Open Folder...)
- Alle Dateien des Projekts müssten nun im linken Panel zu sehen sein, wie dieses `readme.md`, aber auch der `input` Ordner mit allen Profil-Dateien, usw.
- In dem blauen Streifen ganz unten auf der rechten Seite müsste sich ein Knopf befinden, auf dem "Go Live" steht. Clicke auf diesen Knopf.
    - Es wird automatisch die Webseite auf deinem Standardbrowser geöffnet. Alle Änderungen, die jetzt gemacht werden, werden automatisch hier angezeigt (es kann sein, dass man den live-server manchmal neu starten muss).
    - Die Profile wurden alle mit **CHROME** designed! Um die Einheitlichkeit und Funktionsfähigkeit zu garantieren sollte entsprechend die neuste Version von Chrome verwendet werden. 
        - Sollte Chrome nicht dein Standardbrowser sein, kannst du den link herauskopieren und in Chrome öffnen. Diese müsste etwa so aussehen: `http://127.0.0.1:5500/index.html`
- Gehe nun genau so vor wie im oberen Unterkapitel **Textbasierter Workflow** und beobachte währenddessen das Ergebnis in Chrome.
- Nach dem absenden, kannst du auch das Profil vom Browser aus mit `command + P` oder `control + P` als PDF drucken.
    - Lasse die Ränder auf Standard. 
    - Das Häckchen bei Kopf- und Fußzeilen kann weg, jedoch sollten die Hintergrundgrafiken aktiviert bleiben.


## Profil Formatierung
