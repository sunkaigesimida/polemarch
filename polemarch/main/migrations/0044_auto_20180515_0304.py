# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-05-15 03:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0043_usergroup_notes'),
    ]

    operations = [
        migrations.AddField(
            model_name='periodictask',
            name='template',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='periodic_tasks', related_query_name='periodic_tasks', to='main.Template'),
        ),
        migrations.AddField(
            model_name='periodictask',
            name='template_opt',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
