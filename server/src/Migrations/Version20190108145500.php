<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190108145500 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE sub_category DROP FOREIGN KEY FK_BCE3F798C6C55574');
        $this->addSql('DROP INDEX IDX_BCE3F798C6C55574 ON sub_category');
        $this->addSql('ALTER TABLE sub_category DROP main_category_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE sub_category ADD main_category_id INT NOT NULL');
        $this->addSql('ALTER TABLE sub_category ADD CONSTRAINT FK_BCE3F798C6C55574 FOREIGN KEY (main_category_id) REFERENCES main_category (id)');
        $this->addSql('CREATE INDEX IDX_BCE3F798C6C55574 ON sub_category (main_category_id)');
    }
}
