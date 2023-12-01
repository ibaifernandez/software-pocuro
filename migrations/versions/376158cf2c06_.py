"""empty message

Revision ID: 376158cf2c06
Revises: 24ba65d66c80
Create Date: 2023-11-29 08:08:37.180226

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '376158cf2c06'
down_revision = '24ba65d66c80'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('email', schema=None) as batch_op:
        batch_op.drop_column('texto_legal_link')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('email', schema=None) as batch_op:
        batch_op.add_column(sa.Column('texto_legal_link', mysql.VARCHAR(length=255), nullable=True))

    # ### end Alembic commands ###