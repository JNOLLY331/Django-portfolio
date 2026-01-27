from rest_framework import serializers
from .models import Contact, Expirience, Project, Skill, Profile, Expirience

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class ExpirienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expirience
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        
        
        #http://127.0.0.1:8000/api/profiles/


