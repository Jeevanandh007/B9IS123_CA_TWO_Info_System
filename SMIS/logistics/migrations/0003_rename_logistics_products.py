# Generated by Django 5.0.4 on 2024-04-20 22:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('logistics', '0002_dosages_remove_logistics_dosage_list'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='logistics',
            new_name='products',
        ),
    ]
