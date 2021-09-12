#
# Project Build
#
FROM maven:3.8.1-openjdk-15-slim AS build-project
COPY src /build/app/src
COPY target /build/app/target
COPY pom.xml /build/app
RUN mvn -f /build/app/pom.xml package
#
# Image Build
#
FROM openjdk:15-slim
COPY --from=build-project /build/app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 2000
MAINTAINER "Suyash Shukla"

