<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class WordPressController extends Controller
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://nationsounds.online/wp-json/wp/v2/',
        ]);
    }

    public function getPosts()
    {
        try {
            $response = $this->client->request('GET', 'posts');
            $posts = json_decode($response->getBody()->getContents());
            return response()->json($posts);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getPrograms()
    {
        try {
            $categoryId = 6; // ID de la catégorie "Programmes"
            $response = $this->client->request('GET', 'posts', [
                'query' => ['categories' => $categoryId]
            ]);
            $programs = json_decode($response->getBody()->getContents());
            return response()->json($programs);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getAlerts()
{
    try {
        $categoryId = 5; // ID de la catégorie "Alertes"
        $response = $this->client->request('GET', 'posts', [
            'query' => ['categories' => $categoryId]
        ]);
        $alerts = json_decode($response->getBody()->getContents());
        return response()->json($alerts);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}



}
