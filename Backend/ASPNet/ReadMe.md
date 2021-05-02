# ASP.Net Backend

The new Backend Framework for [Bookless](https://github.com/CodeChrisB/bookless)

## Usefull Links
[Swagger](https://localhost:5001/swagger/index.html) (Works after the server has started)

[ASP.Net Documentation](https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/?view=aspnetcore-5.0)




# BooklesDB

Das Projekt 'Bookless' ist ein kleines Framework für die Erstellung eines automatisierten Generischen Backend.

Die Struktur des Frameworks besteht aus folgende Komponeneten:

|Projekt|Beschreibung|Typ|Abhängigkeit
|---|---|---|---|
|**CommonBase**|In dieser Projekt werden alle Hilfsfunktionen und allgemeine Erweiterungen zusammengefasst. Diese sind unabhängig vom Problembereich und können auch in andere Domän-Projekte verwendet werden.|Library|keine
|**Bookless.Contracts**|In dieser Projekt werden alle für das System notwendigen Schnittstellen und Enumerationen implementiert.|Library|keine
|**Bookless.Logic**|Dieser Projekt beinhaltet den vollständigen Datenzugriff, die gesamte Geschäftslogik und stellt somit den zentralen Baustein des Systems dar. |Library|CommonBase, # ASP.Net Backend

The new Backend Framework for [Bookless](https://github.com/CodeChrisB/bookless)

## Usefull Links
[Swagger](https://localhost:5001/swagger/index.html) (Works after the server has started)

[ASP.Net Documentation](https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/?view=aspnetcore-5.0)




# BooklesDB

Das Projekt 'Bookless' ist ein kleines Framework für die Erstellung eines automatisierten Generischen Backend.

Die Struktur des Frameworks besteht aus folgende Komponeneten:

|Projekt|Beschreibung|Typ|Abhängigkeit
|---|---|---|---|
|**CommonBase**|In dieser Projekt werden alle Hilfsfunktionen und allgemeine Erweiterungen zusammengefasst. Diese sind unabhängig vom Problembereich und können auch in andere Domän-Projekte verwendet werden.|Library|keine
|**Bookless.Contracts**|In dieser Projekt werden alle für das System notwendigen Schnittstellen und Enumerationen implementiert.|Library|keine
|**Bookless.Logic**|Dieser Projekt beinhaltet den vollständigen Datenzugriff, die gesamte Geschäftslogik und stellt somit den zentralen Baustein des Systems dar. |Library|CommonBase, Bookless.Contracts
|**Bookless.Transfer**|Dieser Projekt beinhaltet die Transferobjekte für den Datenaustausch zwischen den einzelnen Schichten. |Library|CommonBase, Bookless.Contracts
|**Bookless.WebApi**|In diesem Projekt ist die REST-Schnittstelle implementiert. Diese Modul stellt eine API (Aplication Programming Interface) für den Zugriff auf das System über das Netzwerk zur Verfügung.|Host|CommonBase, Bookless.Contracts, Bookless.Logic

## Projekt

Zur Umsetzung des Projektes wird DotNetCore (3.1) als Framework, die Programmiersprache CSharp (C#) und die Entwicklungsumgebung Visual Studio 2019 Community verwendet. Alle Komponenten können kostenlos aus dem Internet heruntergeladen werden.


.Contracts
|**Bookless.Transfer**|Dieser Projekt beinhaltet die Transferobjekte für den Datenaustausch zwischen den einzelnen Schichten. |Library|CommonBase, Bookless.Contracts
|**Bookless.WebApi**|In diesem Projekt ist die REST-Schnittstelle implementiert. Diese Modul stellt eine API (Aplication Programming Interface) für den Zugriff auf das System über das Netzwerk zur Verfügung.|Host|CommonBase, Bookless.Contracts, Bookless.Logic

## Projekt

Zur Umsetzung des Projektes wird DotNetCore (3.1) als Framework, die Programmiersprache CSharp (C#) und die Entwicklungsumgebung Visual Studio 2019 Community verwendet. Alle Komponenten können kostenlos aus dem Internet heruntergeladen werden.
