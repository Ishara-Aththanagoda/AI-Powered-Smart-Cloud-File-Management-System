from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    storage_used = models.FloatField(default=0.0)
    is_premium = models.BooleanField(default=False)
