<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $utilisateur = Auth::user();
        $token = $utilisateur->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user();
    
        if ($user) {
            $user->tokens()->delete();
            return response()->json(['message' => 'Déconnexion réussie.']);
        }
    
        return response()->json(['message' => 'Utilisateur non authentifié.'], 401);
    }
    
}
