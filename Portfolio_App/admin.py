from django.contrib import admin
from .models import Contact,Project,Skill,Profile,Expirience

# Register your models here.
admin.site.register(Profile)
admin.site.register(Expirience)
admin.site.register(Contact)
admin.site.register(Project)
admin.site.register(Skill)