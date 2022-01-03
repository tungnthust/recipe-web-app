FROM node:16.13-alpine
WORKDIR "/app"
COPY ./package*.json ./
RUN npm install
COPY . . 
ENV PORT=4000
ENV MONGODB_URL='mongodb://mongo:27017/recipe'
ENV SENDGRID_API_KEY='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'
ENV JWT_SECRET='oneloveonefuture'
EXPOSE 4000
CMD ["npm", "run", "start"]