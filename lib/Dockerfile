FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/TOXICTURBO/Toxic-Alexa-Asena-Md.git /toxicalexa
WORKDIR /toxicalexa
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
