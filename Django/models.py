# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class BestFinancestate(models.Model):
    annual_year = models.CharField(max_length=5)
    date = models.DateField()
    sales = models.FloatField()
    business_profit = models.FloatField()
    net_profit = models.FloatField()
    bp_percent = models.FloatField()
    np_percent = models.FloatField()
    roe = models.FloatField()
    debt_ratio = models.FloatField()
    quick_ratio = models.FloatField()
    reserve_ratio = models.FloatField()
    eps = models.FloatField()
    per = models.FloatField()
    bps = models.FloatField()
    pbr = models.FloatField()
    per_share = models.FloatField()
    dividend_rate = models.FloatField()
    propensity_rate = models.FloatField()
    code = models.ForeignKey('BestKospi50', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'Best_financestate'


class BestKospi50(models.Model):
    name = models.CharField(max_length=20)
    code = models.CharField(primary_key=True, max_length=10)

    class Meta:
        managed = False
        db_table = 'Best_kospi50'


class BestMeanofper(models.Model):
    industry = models.CharField(max_length=20)
    per = models.FloatField()
    company = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'Best_meanofper'


class BestStockvalues(models.Model):
    date = models.DateField()
    closeprice = models.IntegerField()
    code = models.ForeignKey(BestKospi50, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'Best_stockvalues'


class AccountUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()
    phone_number = models.CharField(max_length=13)
    profile = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'account_user'


class AccountUserGroups(models.Model):
    user = models.ForeignKey(AccountUser, models.DO_NOTHING)
    group = models.ForeignKey('AuthGroup', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'account_user_groups'
        unique_together = (('user', 'group'),)


class AccountUserUserPermissions(models.Model):
    user = models.ForeignKey(AccountUser, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'account_user_user_permissions'
        unique_together = (('user', 'permission'),)


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AccountUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class MysiteExperience(models.Model):
    title = models.CharField(max_length=50)
    start_date = models.DateField()
    end_date = models.DateField()
    institution = models.CharField(max_length=20)
    memo = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = 'mysite_experience'


class MysiteProfile(models.Model):
    name = models.CharField(max_length=10)
    birthday = models.CharField(max_length=20)
    university = models.CharField(max_length=20)
    major = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    blog = models.CharField(max_length=50)
    git = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'mysite_profile'


class MysiteSkill(models.Model):
    certification = models.CharField(max_length=50, blank=True, null=True)
    certification_num = models.CharField(max_length=50, blank=True, null=True)
    programming = models.CharField(max_length=30, blank=True, null=True)
    degree = models.CharField(max_length=10, blank=True, null=True)
    memo = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mysite_skill'
