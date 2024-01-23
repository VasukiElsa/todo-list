from django.db import models
from datetime import datetime, timedelta


class Todo(models.Model):
    text = models.CharField(max_length = 150)
    created_date = models.DateTimeField(default=datetime.now)

    
    def __str__(self):
       return self.text



