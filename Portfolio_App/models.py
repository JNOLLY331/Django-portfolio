from django.db import models

# Create your models here.
class Profile(models.Model):
    name=models.CharField(max_length=25)
    title= models.CharField(max_length=25)
    bio= models.TextField()
    phone = models.CharField(max_length=25, blank=True)
    email = models.EmailField()
    location =  models.CharField(max_length=25, blank=True)
    github = models.URLField(blank=True)
    linkedn = models.URLField(blank=True)
    twitter = models.URLField(blank = True)
    resume =  models.FileField(upload_to='resume/', blank=True,null=True)
    profile_image = models.ImageField(upload_to= 'profiles/', blank = True,null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
class Skill(models.Model):
    category_choices =[
        ('Frontend','Frontend'),
        ('Backend','backend'),
        ('Database','Database'),
        ('DevOps','DevOps'),
        ('Tools','Tools'),
        ('Others','Others')
    ]
    name = models.CharField(max_length=25)
    category = models.CharField(max_length=25,choices= category_choices)
    proficiency = models.IntegerField(default=50)
    icon=models.CharField(max_length=25)
    order = models.IntegerField(default=0)
    
    def __str__(self):
        return f'{self.name} ({self.category})'
    class Meta:
        ordering = ['order','category', 'name']
 

class Project(models.Model):
    title=models.CharField(max_length=25)
    description= models.CharField(max_length=25)
    technologies= models.CharField(max_length=300)
    image = models.ImageField(upload_to= 'profiles/', blank = True,null = True)
    github_url = models.URLField(blank=True)
    live_url=models.URLField(blank=True)
    featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
     
    def __str__(self):
        return self.title
        
    class Meta:
        ordering = ['-featured','order','-created_at']
 
class Expirience(models.Model):
    company=models.CharField(max_length=25)
    position= models.CharField(max_length=25)
    description= models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True,blank=True)
    current = models.BooleanField(default=False)
    company_logo = models.ImageField(upload_to = 'companies/',blank=True,null=True)
    
    def __str__(self):
        return f'{self.position} at {self.company}'
    class Meta:
        ordering = ['-start_date']
        
class Contact(models.Model):
    name = models.CharField(max_length=55)
    email = models.EmailField()
    subject = models.CharField(max_length=25, blank=True)
    message = models.TextField()
    
    def __str__(self):
        return f'{self.name} - {self.subject}'
    class Meta:
        ordering = ['name']