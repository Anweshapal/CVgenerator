# Stage 1: Build the Spring Boot application
FROM eclipse-temurin:17-jdk AS builder

WORKDIR /app

COPY pom.xml .
COPY src ./src
COPY mvnw .
COPY .mvn ./.mvn

# Make mvnw executable
RUN chmod +x mvnw

RUN ./mvnw -q -DskipTests package

# Stage 2: Run the Spring Boot app
FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
