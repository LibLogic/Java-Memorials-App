package com.liblogic.memorialApp.billionGraves;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


@RestController
public class BillionResource {


    @GetMapping(path= "/")
    public String sayHello(){
        return "hello";
    }


    private static final String POSTS_API_URL = "https://billiongraves.com/search/results?AMPLabel=HomePageSearch&AMPValue=HomePage&given_names=David&family_names=Hodgkinson&cemetery_state=rhode%20Island&cemetery_county=kent";
    @GetMapping(path= "/test")
    public static String main(String[] args) throws IOException, InterruptedException {

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .header("accept", "application/json")
                .uri(URI.create(POSTS_API_URL))
                .build();
        HttpResponse<String> response =
                client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.headers());
        System.out.println(response.body());
        return response.headers().toString();
    }

//    private static final String POSTS_API_URL = "billiongraves.com/api/1.3/search";
//    @PostMapping(path= "/search")
//    public static String main(String[] args) throws IOException, InterruptedException {
//
//        HttpClient client = HttpClient.newHttpClient();
//        HttpRequest request = HttpRequest.newBuilder()
//                .POST()
//                .header("accept", "application/json")
//  ,km              .uri(URI.create(POSTS_API_URL))
//                .build();
//        HttpResponse<String> response =
//                client.send(request, HttpResponse.BodyHandlers.ofString());
//
//        System.out.println(response.headers());
//        System.out.println(response.body());
//        return response.headers().toString();
//    }
}