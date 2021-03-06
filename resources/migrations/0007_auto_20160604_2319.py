# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-05 06:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import resources.libraries.dictable.dictable


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0006_game_display_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Position2d',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('x', models.IntegerField(default=0)),
                ('y', models.IntegerField(default=0)),
            ],
            bases=(models.Model, resources.libraries.dictable.dictable.Dictable),
        ),
        migrations.RemoveField(
            model_name='gamecharacter',
            name='x_position',
        ),
        migrations.RemoveField(
            model_name='gamecharacter',
            name='y_position',
        ),
        migrations.RemoveField(
            model_name='gamecharacter',
            name='z_position',
        ),
        migrations.AlterField(
            model_name='gamemap',
            name='game',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='game_maps', to='resources.Game'),
        ),
        migrations.AddField(
            model_name='gamecharacter',
            name='position',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='resources.Position2d'),
            preserve_default=False,
        ),
    ]
