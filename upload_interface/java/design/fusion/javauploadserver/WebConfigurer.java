package design.fusion.javauploadserver;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfigurer {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/file")
                        .allowedHeaders("*")
                        .allowedMethods("POST")
                        .allowCredentials(true)//允许存在cookie
                        .allowedOrigins("*");//允许所有域名访问
            }
        };
}}
