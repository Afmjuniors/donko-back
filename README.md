# Labeddit
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#roadmap">RoadMap</a></li>
    <li>
      <a href="#methods">Estructure REST</a>
      <ul>
        <li><a href="#methods">Methods</a></li>
        <li><a href="#response">Response</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#frontend-repository">FrontEnd Repository</a></li>    
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


## About the project
O Donko é uma aplicação web que será projetada para ser uma plataforma completa que serve como guia para eventos culturais, desde shows musicais até exposições de arte, teatro e outras opções de entretenimento. <br/>

## Built With

- NodeJS
- Typescript
- Express
- SQL e SQLite
- Knex
- POO
- Layered architecture
- UUID
- Password hashed
- Autentication and autozrization
- Router
- Postman


## Documentation
Ducumentation of the API with instrutions on how to use the endpoints avalible for the Labeddit aplication 
<br>

[DONKO-RIO API](https://documenter.getpostman.com/view/24460683/2s93RNyFCk)

# RoadMap

- Endpoints
    - Users
        - [ ]  Create new User
        - [ ]  Login User
        - [ ]  Edit User
        - [ ]  Delete user
    - Events
        - [ ] Get All Events
        - [ ] Create new Event
        - [ ] Edit Event
        - [ ] Delete Event


- Authentication and authorization
    - [ ]  UUID
    - [ ]  Hashed passwords with Bcrypt.
    - [ ]  tokens JWT
 - Code
    - [ ]  POO
    - [ ]  Layered architecture
    - [ ]  Router in Express
    - [ ]  SOLID
    - [ ]  Clean code

## Methods
Requests for the API must follow HTTP RESTful patterns.
| Methods | Description |
|---|---|
| `GET` | 	Returns information for one or more records. |
| `POST` | Used to create a new record or login access. |
| `PUT` | Updates data for a record or changes its status. |
| `PATCH` | 	Partially updates data for a record. |
| `DELETE` | Removes a record from the system. |


## Response

| Código | Descrição |
|---|---|
| `200` | Request successfully executed (success).|
| `201` | Data created successfully (success).|
| `400` | Validation errors or fields provided do not exist in the system.|
| `404` | Searched record not found (Not found).|
| `409` | The user already exists in the system. (Conflict).|
| `500` | Unexpected error.|


## Getting Started 

Here is an example of instructions on how to set up the project locally.
To have a local copy, follow the steps below:

### Instalation

1. Clone repository
  ```sh
  git clone https://github.com/Afmjuniors/labeddit-back.git
  ```
   
2. Install NPM TypeScript packages 
  ```sh
  npm init -y (create package.json)
  ```
  ```sh
  npm i -g typescript (just once)
  ```
  ```sh
  npm i typescript -D (install typescript in the project)
  ```
  ```sh
  npx tsc -init (create tsconfig.json)
  ```
  
3. Install All Packjson dependencies 
  
  ```sh
  npm install
  ```
4. Run NPM developer

  ```sh
  npm run dev
   ```

## Usage

O Donko é uma aplicação web que será projetada para ser uma plataforma completa que serve como guia para eventos culturais, desde shows musicais até exposições de arte, teatro e outras opções de entretenimento.  

## FrontEnd-Repository
To see repository of this application [Front-end](https://github.com/SahBianchi/hackrio-front) 


## Contact

Alexandre Machado - FullStack - afmjuniors@gmail.com

[![Linkedin](https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/afmjuniors/)](https://www.linkedin.com/in/afmjuniors)
[![Github][Github]](https://github.com/Afmjuniors)
</br>
Samantha Bianchi- Front - sahlsb2@gmail.com

[![Linkedin](https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/sahbianchi/)](https://www.linkedin.com/in/sahbianchi/)
[![Github][Github]](https://github.com/SahBianchi)
</br>
Marina Jaudy - UI/UX - Front - mbuzina@hotmail.com

[![Linkedin](https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/marina-jaudy/)](https://www.linkedin.com/in/marina-jaudy)
[![Github][Github]](https://github.com/marinajaudy)
</br>
Mônica Jesus - ADM - monicajprado@outlook.com

[![Linkedin](https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/monicajprado/)](https://www.linkedin.com/in/monicajprado/)
</br>
## Acknowledgments

* Gostaria de agradecer a todo time que participou comigo do hackthon, vocês foram feras
* Gostaria tambem de acredecer ao staff do hackthon, pricipalmente ao Johnny que nos aconcelhou sempre que necessario




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Afmjuniors/labeddit-back.svg?style=for-the-badge
[contributors-url]: https://github.com/Afmjuniors/labeddit-back/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Afmjuniors/labeddit-back.svg?style=for-the-badge
[forks-url]: https://github.com/Afmjuniors/labeddit-back/network/members
[stars-shield]: https://img.shields.io/github/stars/Afmjuniors/labeddit-back.svg?style=for-the-badge
[stars-url]: https://github.com/Afmjuniors/labeddit-back/stargazers
[issues-shield]: https://img.shields.io/github/issues/Afmjuniors/labeddit-back.svg?style=for-the-badge
[issues-url]: https://github.com/Afmjuniors/labeddit-back/issues
[license-shield]: https://img.shields.io/github/license/Afmjuniors/labeddit-back.svg?style=for-the-badge
[license-url]: https://github.com/Afmjuniors/labeddit-back/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/afmjuniors
[product-screenshot]: readme-image/screenshot.gif

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Styled-components]:https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled-url]: https://www.styled-components.com/
[Chakra-UI]: https://img.shields.io/static/v1?style=for-the-badge&message=Chakra+UI&color=319795&logo=Chakra+UI&logoColor=FFFFFF&label=
[Chakra-url]: https://chakra-ui.com/getting-started
[Material-UI]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[Material-url]:https://mui.com/material-ui/getting-started/overview/

[SQLite]: https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white
[SQLite-url]: https://www.sqlitetutorial.net/
[Express]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/pt-br/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.js-url]: https://nodejs.org/en/
[Postman]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white
[Postman-url]: https://www.postman.com/
[Jest]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]:https://jestjs.io/pt-BR/
[Github]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white

