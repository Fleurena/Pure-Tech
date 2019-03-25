<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190108142608 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE stock_status (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, comment LONGTEXT NOT NULL, statut VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, user_sheep_id INT NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role JSON NOT NULL COMMENT \'(DC2Type:json_array)\', remember_token VARCHAR(255) NOT NULL, verified INT NOT NULL, UNIQUE INDEX UNIQ_8D93D649E4FD75F2 (user_sheep_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sub_category (id INT AUTO_INCREMENT NOT NULL, main_category_id INT NOT NULL, name VARCHAR(255) NOT NULL, thumbnail VARCHAR(255) NOT NULL, INDEX IDX_BCE3F798C6C55574 (main_category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_sheet (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, date_birthday DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_brand (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, thumbnail VARCHAR(255) NOT NULL, liens VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, sub_category_id INT NOT NULL, stock_status_id INT NOT NULL, product_brand_id INT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, price DOUBLE PRECISION NOT NULL, picture JSON NOT NULL COMMENT \'(DC2Type:json_array)\', thumbnail VARCHAR(255) NOT NULL, quantity INT NOT NULL, weight INT NOT NULL, date DATETIME NOT NULL, INDEX IDX_D34A04ADF7BFE87C (sub_category_id), INDEX IDX_D34A04ADF36AE655 (stock_status_id), INDEX IDX_D34A04AD8F45BA9F (product_brand_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE adress_sheet (id INT AUTO_INCREMENT NOT NULL, user_sheet_id INT NOT NULL, name VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, code_postal INT NOT NULL, country VARCHAR(255) NOT NULL, INDEX IDX_8FFE12E46B9FE2A5 (user_sheet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE main_category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, thumbnail VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649E4FD75F2 FOREIGN KEY (user_sheep_id) REFERENCES user_sheet (id)');
        $this->addSql('ALTER TABLE sub_category ADD CONSTRAINT FK_BCE3F798C6C55574 FOREIGN KEY (main_category_id) REFERENCES main_category (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADF7BFE87C FOREIGN KEY (sub_category_id) REFERENCES sub_category (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADF36AE655 FOREIGN KEY (stock_status_id) REFERENCES stock_status (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD8F45BA9F FOREIGN KEY (product_brand_id) REFERENCES product_brand (id)');
        $this->addSql('ALTER TABLE adress_sheet ADD CONSTRAINT FK_8FFE12E46B9FE2A5 FOREIGN KEY (user_sheet_id) REFERENCES user_sheet (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADF36AE655');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADF7BFE87C');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649E4FD75F2');
        $this->addSql('ALTER TABLE adress_sheet DROP FOREIGN KEY FK_8FFE12E46B9FE2A5');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD8F45BA9F');
        $this->addSql('ALTER TABLE sub_category DROP FOREIGN KEY FK_BCE3F798C6C55574');
        $this->addSql('DROP TABLE stock_status');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE sub_category');
        $this->addSql('DROP TABLE user_sheet');
        $this->addSql('DROP TABLE product_brand');
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE adress_sheet');
        $this->addSql('DROP TABLE main_category');
    }
}
