import os
from pathlib import Path

# 1. BASE DIRECTORY
BASE_DIR = Path(__file__).resolve().parent.parent

# 2. SECURITY (Update for production)
SECRET_KEY = os.environ.get('SECRET_KEY', 'django-insecure-default-key')
DEBUG = 'True' == os.environ.get('DEBUG', 'TRUE')
ALLOWED_HOSTS = [ "localhost",
    "127.0.0.1",
    "japhethanold.onrender.com",]


# 3. APPLICATION DEFINITION
INSTALLED_APPS = [
    'cloudinary',
    'cloudinary_storage',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic', # Must be above staticfiles
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'Portfolio_App',
    ]

CLOUDINARY_STORAGE = {
    'CLOUD_NAME': 'dcetqe8a5',
    'API_KEY': '312234131976867',
    'API_SECRET': 'qWrJDsVPaofxR0wqQCOqYi0lmF4',
}

DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'



# 4. MIDDLEWARE (Order is critical here!)
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware', # 2nd place: Handles React files
    'corsheaders.middleware.CorsMiddleware',      # 3rd place: Handles CORS
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'Portfolio.urls'

# 5. TEMPLATES (Tells Django where index.html lives)
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
         "DIRS": [
            BASE_DIR / "frontend" / "frontend" / "dist"
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WHITENOISE_INDEX_FILE = True

# 6. STATIC & MEDIA FILES
STATIC_ROOT = BASE_DIR / 'staticfiles'


STATIC_URL = '/assets/'



# The URL prefix for images


# Where Django looks for Vite assets during development/build
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend', 'frontend', 'dist'),
]

# Where WhiteNoise serves files from in production
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Compression and Caching for performance
STORAGES = {
    "default": {
        "BACKEND": "cloudinary_storage.storage.MediaCloudinaryStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# 7. CORS SETTINGS
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://japhethanold.onrender.com",
]
 
# 8. DATABASE (Render uses PostgreSQL; locally uses SQLite)
import dj_database_url
DATABASES = {
    'default': dj_database_url.config(
        default=f'sqlite:///{BASE_DIR / "db.sqlite3"}',
        conn_max_age=600
    )
}