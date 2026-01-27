from email.policy import HTTP
import profile
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import HttpResponse


from .models import Profile, Skill, Project, Expirience, Contact
from .serializers import (
    ProfileSerializer, 
    SkillSerializer, 
    ProjectSerializer, 
    ExpirienceSerializer,
    ContactSerializer,
)
from Portfolio_App import serializers

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    
    @action(detail=False, methods=['get'])
    def main(self,request):
        profiles = self.queryset.first()
        if profiles:
            serializer = self.get_serializer(profiles)
            return Response(serializer.data)
        return Response({'detail':'No profile found'},status=status.HTTP_404_NOT_FOUND)
        
class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class =SkillSerializer
    
    @action(detail=False, methods=['get'])
    def by_category(self,request):
        Skills = self.queryset.all()
        categories={}
        for Skill in Skills:
            if Skill.category not in categories:
                categories[Skill.category]=[]
            categories[Skill.category].append(SkillSerializer(Skill).data)
        return Response(categories)
                
       
class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class =ProjectSerializer
    
    @action(detail=False, methods=['get'])
    def featured(self,request):
        featured_projects = self.queryset.filter(featured=True)
        serializer= self.get_serializer(featured_projects,many=True)
        return Response(serializer.data)
      
class ExpirienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Expirience.objects.all()
    serializer_class =ExpirienceSerializer  
    

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    http_method_names = ['post']
    
    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():  
            serializer.save()
            return Response({'message': 'message sent successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
             #7511929
            #0113383250
       
        
            