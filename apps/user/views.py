from apps.courses.models import CoursesLibrary, PaidCoursesLibrary
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from .models import UserAccount
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from django.http.response import HttpResponseBadRequest
from .models import UserAccount

class CreateUserProfileView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    def post(self, request, format=None):
        data = self.request.data

        account = data["account"]

        user = UserAccount.objects.get_or_create(
            account=account,
            email=account,
            username=account,
            first_name='name',
            last_name='last name',
            location='location',
            url='url',
            birthday='2022-01-01',
            profile_info='bio information',
            age_limit='18+',
            verified=False,
            telefon="telefon"
            
        
        )

        CoursesLibrary.objects.get_or_create(author=user[0])
        PaidCoursesLibrary.objects.get_or_create(author=user[0])

        return Response({'success': 'Message sent successfully'})
    
    
class DetailUserProfileView(APIView):
    def get(self, request, account, *args, **kwargs):
        user = UserAccount.objects.get(account=account)
        serializer = UserSerializer(user)
        return Response({
            'user': serializer.data
        }, status=status.HTTP_200_OK)
