FROM kbai/anno-common:latest
RUN apt-get update && apt-get install -yy raptor2-utils
CMD ["node", "anno-server/server.js"]
# RUN ls -la node_modules/@kba
# RUN mkdir -p anno-server/node_modules/@kba && ln -sf /anno/anno-store-mongodb anno-server/node_modules/@kba
