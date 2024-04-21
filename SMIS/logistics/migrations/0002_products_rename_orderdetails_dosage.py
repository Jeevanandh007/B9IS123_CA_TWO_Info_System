# Generated by Django 5.0.4 on 2024-04-21 00:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('logistics', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='products',
            fields=[
                ('PRODUCT_ID', models.AutoField(primary_key=True, serialize=False)),
                ('PRODUCT_NAME', models.CharField(max_length=200)),
            ],
        ),
        migrations.RenameModel(
            old_name='orderdetails',
            new_name='dosage',
        ),
    ]
