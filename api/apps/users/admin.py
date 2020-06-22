from django.contrib import admin
from .models import UserProfile


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['account_name','account_height','account_weight','account_birthday',
                   'account_level','account_gender','account_address','account_pass']

admin.site.register(UserProfile, UserProfileAdmin)