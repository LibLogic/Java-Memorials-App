package com.liblogic.memorialApp.billionGraves;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


//@RestController
public class BillionResource {

    private static final String POSTS_API_URL = "https://billiongraves.com/search/results?AMPLabel=HomePageSearch&AMPValue=HomePage&given_names=David&family_names=Hodgkinson&cemetery_state=rhode%20Island&cemetery_county=kent";
//    @GetMapping(path= "/search")
    public static void main(String[] args) throws IOException, InterruptedException {

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
    }
}