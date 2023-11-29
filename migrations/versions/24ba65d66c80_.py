"""empty message

Revision ID: 24ba65d66c80
Revises: 2a1baed1ad00
Create Date: 2023-11-29 07:54:34.678055

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '24ba65d66c80'
down_revision = '2a1baed1ad00'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('email', schema=None) as batch_op:
        batch_op.add_column(sa.Column('nombre_del_proyecto', sa.String(length=255), nullable=True))
        batch_op.add_column(sa.Column('te_esperamos_image', sa.String(length=255), nullable=True))
        batch_op.add_column(sa.Column('te_esperamos_link', sa.String(length=255), nullable=True))
        batch_op.add_column(sa.Column('texto_legal_link', sa.String(length=255), nullable=True))
        batch_op.add_column(sa.Column('texto_legal_text', sa.String(length=255), nullable=True))
        batch_op.drop_column('textoLegal_text')
        batch_op.drop_column('textoLegal_link')
        batch_op.drop_column('teEsperamos_image')
        batch_op.drop_column('teEsperamos_link')
        batch_op.drop_column('nombreDelProyecto')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('email', schema=None) as batch_op:
        batch_op.add_column(sa.Column('nombreDelProyecto', mysql.VARCHAR(length=255), nullable=True))
        batch_op.add_column(sa.Column('teEsperamos_link', mysql.VARCHAR(length=255), nullable=True))
        batch_op.add_column(sa.Column('teEsperamos_image', mysql.VARCHAR(length=255), nullable=True))
        batch_op.add_column(sa.Column('textoLegal_link', mysql.VARCHAR(length=255), nullable=True))
        batch_op.add_column(sa.Column('textoLegal_text', mysql.VARCHAR(length=255), nullable=True))
        batch_op.drop_column('texto_legal_text')
        batch_op.drop_column('texto_legal_link')
        batch_op.drop_column('te_esperamos_link')
        batch_op.drop_column('te_esperamos_image')
        batch_op.drop_column('nombre_del_proyecto')

    # ### end Alembic commands ###
