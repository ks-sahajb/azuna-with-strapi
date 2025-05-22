## QPR New Design With Next.js and Strapi 🚀

A monorepo project for a company specializing in web design and application (AP) projects. It features a modern Next.js frontend and a Strapi backend for content management, enabling rapid delivery of high-quality web and app solutions for clients.

---

## Features ✨
- Modern, responsive frontend built with Next.js
- Powerful, customizable backend with Strapi
- API-driven architecture for seamless integration
- Easy content management for non-technical users
- Modular code structure for scalability
- Ideal for web design agencies and AP project delivery

---

## Versions 🛠️

```
node version v22.13.0
npm version 11.0.0
```

---

## Project Structure 🗂️

```
README.md
Taskfile.backup.yml
Taskfile.yml
client/           # Next.js frontend
  public/
  src/
    apis/
    app/
    components/
    utils/
server/           # Strapi backend
  config/
  database/
  public/
  src/
  types/
strapi-backups/   # Strapi backup data
```

---

## Getting Started ⚡

### Prerequisites 📋
- Node.js v22.13.0
- npm v11.0.0

### 1. Install Dependencies 📦

#### Frontend (Next.js)
```sh
cd client
npm install
```

#### Backend (Strapi)
```sh
cd ../server
npm install
```

### 2. Running the Applications ▶️

#### Start Next.js Frontend
```sh
cd client
npm run dev
```

#### Start Strapi Backend
```sh
cd server
npm run develop
```

---

## Folder Details 📁
- `client/` - Contains the Next.js application (frontend)
- `server/` - Contains the Strapi application (backend)
- `strapi-backups/` - Contains Strapi backup data for different features

---

## Useful Commands 💡

### Next.js (client)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Strapi (server)
- `npm run develop` - Start Strapi in development mode
- `npm run build` - Build Strapi admin panel
- `npm run start` - Start Strapi in production mode

---

## Documentation & Resources 📚
- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io/)

---

## Contributing 🤝
Contributions are welcome! Please open issues or submit pull requests for improvements.

---

## License 📄

This project is licensed under the MIT License.
