FROM node:latest

# Frontend için çalışma dizinini belirleyin
WORKDIR /frontend

# Tüm dosyaları kopyalayın (package.json dahil)
COPY . .

# Uygulamanın çalışacağı portu belirtin
EXPOSE 3800

# Frontend uygulamasını çalıştırmak için komut
CMD ["npm", "run", "dev"]
