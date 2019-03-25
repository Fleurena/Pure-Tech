<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190108143940 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649E4FD75F2');
        $this->addSql('DROP INDEX UNIQ_8D93D649E4FD75F2 ON user');
        $this->addSql('ALTER TABLE user ADD user_sheet_id INT NOT NULL, DROP user_sheep_id, DROP password, DROP role, DROP remember_token, DROP verified');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6496B9FE2A5 FOREIGN KEY (user_sheet_id) REFERENCES user_sheet (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D6496B9FE2A5 ON user (user_sheet_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6496B9FE2A5');
        $this->addSql('DROP INDEX UNIQ_8D93D6496B9FE2A5 ON user');
        $this->addSql('ALTER TABLE user ADD password VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, ADD role JSON NOT NULL COMMENT \'(DC2Type:json_array)\', ADD remember_token VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, ADD verified INT NOT NULL, CHANGE user_sheet_id user_sheep_id INT NOT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649E4FD75F2 FOREIGN KEY (user_sheep_id) REFERENCES user_sheet (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E4FD75F2 ON user (user_sheep_id)');
    }
}
