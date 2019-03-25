<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190108162629 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE adress_sheet');
        $this->addSql('DROP TABLE user');
        $this->addSql('ALTER TABLE user_sheet CHANGE date_birthday date DATETIME NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE adress_sheet (id INT AUTO_INCREMENT NOT NULL, user_sheet_id INT NOT NULL, name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, city VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, code_postal INT NOT NULL, country VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, INDEX IDX_8FFE12E46B9FE2A5 (user_sheet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, user_sheet_id INT NOT NULL, email VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, UNIQUE INDEX UNIQ_8D93D6496B9FE2A5 (user_sheet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE adress_sheet ADD CONSTRAINT FK_8FFE12E46B9FE2A5 FOREIGN KEY (user_sheet_id) REFERENCES user_sheet (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6496B9FE2A5 FOREIGN KEY (user_sheet_id) REFERENCES user_sheet (id)');
        $this->addSql('ALTER TABLE user_sheet CHANGE date date_birthday DATETIME NOT NULL');
    }
}
