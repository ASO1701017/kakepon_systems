from django.db import models
from datetime import datetime
from django.contrib.auth.models import AbstractUser

class UserProfile(AbstractUser):

    account_name = models.CharField(max_length=30,verbose_name="名前")
    account_height = models.IntegerField(max_length=30,verbose_name="身長")
    account_weight = models.IntegerField(max_length=30,verbose_name="体重")
    account_birthday = models.DateField(verbose_name="生年月日")
    account_level = models.CharField(max_length=7, choices=(("revel1", "レベルⅠ"), ("revel2", "レベルⅡ"), ("revel3", "レベルⅢ")),
                              default="male", verbose_name="身体活動レベル")
    account_gender = models.CharField(max_length=6, choices=(("male", "男性"), ("female", "女性"), ("secret", "非公開")),
                              default="male", verbose_name="性別")
    account_address = models.CharField(max_length=200,verbose_name="メールアドレス")
    account_pass = models.CharField(max_length=30,verbose_name="パスワード")

    class Meta:
        verbose_name = "ユーザー"
        verbose_name_plural = verbose_name

        def __str__(self):
            return self.username

