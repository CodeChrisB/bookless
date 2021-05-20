# BooklesDB 

Das ist ein kleines Framework für die Erstellung eines automatisierten Generischen Backend für Bookless.

Die Struktur des Frameworks besteht aus folgende Komponeneten:

|Projekt|Beschreibung|Typ|Abhängigkeit
|---|---|---|---|
|**CommonBase**|In dieser Projekt werden alle Hilfsfunktionen und allgemeine Erweiterungen zusammengefasst. Diese sind unabhängig vom Problembereich und können auch in andere Domän-Projekte verwendet werden.|Library|keine
|**Bookless.Contracts**|In dieser Projekt werden alle für das System notwendigen Schnittstellen und Enumerationen implementiert.|Library|keine
|**Bookless.Logic**|Dieser Projekt beinhaltet den vollständigen Datenzugriff, die gesamte Geschäftslogik und stellt somit den zentralen Baustein des Systems dar. |Library|CommonBase, # ASP.Net Backend
|**Bookless.Transfer**|Dieser Projekt beinhaltet die Transferobjekte für den Datenaustausch zwischen den einzelnen Schichten. |Library|CommonBase, Bookless.Contracts
|**Bookless.WebApi**|In diesem Projekt ist die REST-Schnittstelle implementiert. Dieses Modul stellt eine API (Aplication Programming Interface) für den Zugriff auf das System über das Netzwerk zur Verfügung.|Host|CommonBase, Bookless.Contracts, Bookless.Logic


## Nützliche Links
[Swagger](https://localhost:5001/swagger/index.html) ,nach Start von [Bookless.WebAPI](https://github.com/CodeChrisB/bookless/tree/frontendV1/Backend/ASPNet/Bookless.WebApi) aufrufbar

[ASP.Net Documentation](https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/?view=aspnetcore-5.0)


## Projekt
Zur Umsetzung des Projektes wird DotNetCore (5.0) als Framework genuzt.
=======
# Backend
## API
<b>Make sure that you are in the bookless_server directory!</b>
- Build the System
    - `docker-compose build`
    - this command loads all required modules

- Run the System
    - `docker-compose up`
    - this command runs the system 

## Changes in init.sql
- When you changed something from the db structe you have to remove the db image from your docker compose   
    - `docker-compose rm database`

- Then you have to run the system again
- 
